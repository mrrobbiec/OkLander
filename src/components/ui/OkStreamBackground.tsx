import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

interface DataPacket {
  mesh: THREE.Mesh;
  speed: number;
  lane: number;
}

const OkStreamBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const effectRef = useRef<AsciiEffect | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const packetsRef = useRef<DataPacket[]>([]);
  const frameIdRef = useRef<number | null>(null);
  
  // Animation parameters
  const packetCount = 40; // Number of data packets
  const laneCount = 8; // Number of horizontal lanes for packets to travel in
  const characters = " .:-+*=%@#";
  const color = "#4a9eff";
  const resolution = 0.12;
  const boundaryLeft = -400; // Left boundary
  const boundaryRight = 400; // Right boundary
  const verticalSpacing = 40; // Spacing between lanes

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

    // Create data packets
    const packets: DataPacket[] = [];
    
    // Define packet types with different geometries and speeds
    const packetTypes = [
      { 
        geometry: new THREE.BoxGeometry(30, 10, 10), 
        speedRange: [1.5, 3], 
        probability: 0.5 // 50% chance of this type
      },
      { 
        geometry: new THREE.BoxGeometry(15, 10, 10), 
        speedRange: [2.5, 4], 
        probability: 0.3 // 30% chance of this type
      },
      { 
        geometry: new THREE.BoxGeometry(50, 10, 10), 
        speedRange: [1, 2], 
        probability: 0.2 // 20% chance of this type
      }
    ];
    
    // Material for all packets
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      flatShading: true,
      emissive: 0x222222
    });

    // Calculate lane positions
    const lanePositions: number[] = [];
    const totalHeight = verticalSpacing * (laneCount - 1);
    const startY = totalHeight / 2;
    
    for (let i = 0; i < laneCount; i++) {
      lanePositions.push(startY - i * verticalSpacing);
    }

    // Create packets and distribute them across lanes
    for (let i = 0; i < packetCount; i++) {
      // Determine packet type based on probability
      const rand = Math.random();
      let typeIndex = 0;
      let cumProb = 0;
      
      for (let j = 0; j < packetTypes.length; j++) {
        cumProb += packetTypes[j].probability;
        if (rand < cumProb) {
          typeIndex = j;
          break;
        }
      }
      
      const packetType = packetTypes[typeIndex];
      
      // Create packet mesh
      const mesh = new THREE.Mesh(packetType.geometry, material);
      
      // Assign to a lane
      const lane = Math.floor(Math.random() * laneCount);
      
      // Position packet
      mesh.position.x = boundaryLeft + Math.random() * (boundaryRight - boundaryLeft);
      mesh.position.y = lanePositions[lane];
      mesh.position.z = 0;
      
      // Determine speed
      const speed = packetType.speedRange[0] + Math.random() * (packetType.speedRange[1] - packetType.speedRange[0]);
      
      // Add to scene
      scene.add(mesh);
      
      // Store packet data
      packets.push({
        mesh,
        speed,
        lane
      });
    }
    
    packetsRef.current = packets;

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
      if (!packetsRef.current || !sceneRef.current || !cameraRef.current || !effectRef.current) return;
      
      // Update packet positions
      packetsRef.current.forEach(packet => {
        // Move packet from left to right
        packet.mesh.position.x += packet.speed;
        
        // If packet moves past right boundary, reset to left
        if (packet.mesh.position.x > boundaryRight) {
          packet.mesh.position.x = boundaryLeft;
          
          // Optionally change lane
          if (Math.random() < 0.3) { // 30% chance to change lane
            const newLane = Math.floor(Math.random() * laneCount);
            packet.lane = newLane;
            packet.mesh.position.y = lanePositions[newLane];
          }
        }
      });
      
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
      
      // Remove all packets from scene
      packetsRef.current.forEach(packet => {
        scene.remove(packet.mesh);
        packet.mesh.geometry.dispose();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full"></div>
  );
};

export default OkStreamBackground;
