import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

interface Node {
  mesh: THREE.Mesh;
  position: THREE.Vector3;
  connections: number[];
}

interface DataFlow {
  line: THREE.Line;
  startNode: number;
  endNode: number;
  progress: number;
  speed: number;
}

const OkFlowBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const effectRef = useRef<AsciiEffect | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const flowsRef = useRef<DataFlow[]>([]);
  const frameIdRef = useRef<number | null>(null);
  
  // Animation parameters
  const nodeCount = 15; // Number of nodes in the network
  const flowCount = 25; // Number of data flows
  const characters = " .:-+*=%@#";
  const color = "#82ca9d"; // Green color from style guide
  const resolution = 0.12;
  const boundarySize = 300; // Size of the boundary box

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      70,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      1000
    );
    camera.position.z = 500;
    cameraRef.current = camera;

    // Add lights
    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    pointLight.position.set(500, 500, 500);
    scene.add(pointLight);

    // Create nodes
    const nodes: Node[] = [];
    const nodeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      flatShading: true,
      emissive: 0x222222
    });
    
    // Create node geometries with different sizes
    const nodeGeometries = [
      new THREE.SphereGeometry(10, 8, 8),
      new THREE.BoxGeometry(15, 15, 15),
      new THREE.TetrahedronGeometry(12)
    ];

    // Create nodes at random positions
    for (let i = 0; i < nodeCount; i++) {
      const geometry = nodeGeometries[Math.floor(Math.random() * nodeGeometries.length)];
      const mesh = new THREE.Mesh(geometry, nodeMaterial);
      
      // Position node within boundary
      const position = new THREE.Vector3(
        (Math.random() * 2 - 1) * boundarySize,
        (Math.random() * 2 - 1) * boundarySize,
        (Math.random() * 2 - 1) * 100 // Less depth variation
      );
      
      mesh.position.copy(position);
      scene.add(mesh);
      
      // Each node will connect to 2-4 other nodes
      const connections: number[] = [];
      
      nodes.push({
        mesh,
        position,
        connections
      });
    }
    
    // Create connections between nodes
    for (let i = 0; i < nodeCount; i++) {
      // Determine number of connections for this node (2-4)
      const connectionCount = 2 + Math.floor(Math.random() * 3);
      
      // Create connections to other nodes
      for (let j = 0; j < connectionCount; j++) {
        // Find a node to connect to (not self, not already connected)
        let targetIndex;
        let attempts = 0;
        
        do {
          targetIndex = Math.floor(Math.random() * nodeCount);
          attempts++;
          // Avoid infinite loop if all nodes are already connected
          if (attempts > 20) break;
        } while (targetIndex === i || nodes[i].connections.includes(targetIndex));
        
        if (attempts <= 20) {
          nodes[i].connections.push(targetIndex);
          
          // Create a line geometry for the connection
          const points = [
            nodes[i].position.clone(),
            nodes[targetIndex].position.clone()
          ];
          
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x555555, 
            transparent: true,
            opacity: 0.5
          });
          
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
        }
      }
    }
    
    nodesRef.current = nodes;
    
    // Create data flows
    const flows: DataFlow[] = [];
    const flowMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });
    
    for (let i = 0; i < flowCount; i++) {
      // Pick random start and end nodes that have a connection
      let startNode = Math.floor(Math.random() * nodeCount);
      
      // Make sure the start node has connections
      while (nodes[startNode].connections.length === 0) {
        startNode = Math.floor(Math.random() * nodeCount);
      }
      
      // Pick a random connection from the start node
      const endNode = nodes[startNode].connections[
        Math.floor(Math.random() * nodes[startNode].connections.length)
      ];
      
      // Create a line for the flow
      const points = [
        nodes[startNode].position.clone(),
        nodes[startNode].position.clone() // Initially both points are the same
      ];
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, flowMaterial);
      scene.add(line);
      
      // Add flow data
      flows.push({
        line,
        startNode,
        endNode,
        progress: 0,
        speed: 0.005 + Math.random() * 0.015 // Random speed
      });
    }
    
    flowsRef.current = flows;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    rendererRef.current = renderer;

    // Initialize ASCII effect
    const effect = new AsciiEffect(renderer, characters, { invert: true, resolution });
    effect.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    effect.domElement.style.color = color;
    effect.domElement.style.backgroundColor = 'transparent';
    effect.domElement.style.position = 'absolute';
    effect.domElement.style.top = '0';
    effect.domElement.style.left = '0';
    effect.domElement.style.width = '100%';
    effect.domElement.style.height = '100%';
    effect.domElement.style.opacity = '0.8';
    effectRef.current = effect;

    // Add effect to container
    containerRef.current.appendChild(effect.domElement);

    // Handle container resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current || !effectRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
      effectRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      if (!nodesRef.current || !flowsRef.current || !sceneRef.current || !cameraRef.current || !effectRef.current) return;
      
      // Rotate nodes slightly
      nodesRef.current.forEach(node => {
        node.mesh.rotation.x += 0.005;
        node.mesh.rotation.y += 0.007;
      });
      
      // Update data flows
      flowsRef.current.forEach(flow => {
        // Update flow progress
        flow.progress += flow.speed;
        
        // If flow reaches end, reset to start
        if (flow.progress >= 1) {
          flow.progress = 0;
          
          // Possibly change destination
          if (Math.random() < 0.3) { // 30% chance to change destination
            const startNode = flow.endNode; // The previous end becomes the new start
            
            // Make sure the new start node has connections
            if (nodesRef.current[startNode].connections.length > 0) {
              // Pick a random connection from the new start node
              const endNode = nodesRef.current[startNode].connections[
                Math.floor(Math.random() * nodesRef.current[startNode].connections.length)
              ];
              
              flow.startNode = startNode;
              flow.endNode = endNode;
            }
          }
        }
        
        // Update flow line position
        const startPos = nodesRef.current[flow.startNode].position;
        const endPos = nodesRef.current[flow.endNode].position;
        
        // Calculate current position based on progress
        const currentPos = new THREE.Vector3().lerpVectors(startPos, endPos, flow.progress);
        
        // Update line geometry
        const points = [startPos, currentPos];
        flow.line.geometry.setFromPoints(points);
      });
      
      // Slowly rotate the entire scene for added effect
      if (sceneRef.current) {
        sceneRef.current.rotation.y += 0.0005;
      }
      
      effectRef.current.render(sceneRef.current, cameraRef.current);
      
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (containerRef.current && effectRef.current) {
        containerRef.current.removeChild(effectRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      
      // Remove all nodes and flows from scene
      nodesRef.current.forEach(node => {
        scene.remove(node.mesh);
        node.mesh.geometry.dispose();
      });
      
      flowsRef.current.forEach(flow => {
        scene.remove(flow.line);
        flow.line.geometry.dispose();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full"></div>
  );
};

export default OkFlowBackground;
