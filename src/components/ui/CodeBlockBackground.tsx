import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

interface CodeBlockBackgroundProps {
  color?: string;
  geometry?: 'torus' | 'sphere' | 'torusKnot';
  characters?: string;
  resolution?: number;
  rotationSpeed?: {
    x: number;
    y: number;
    z: number;
  };
}

const CodeBlockBackground: React.FC<CodeBlockBackgroundProps> = ({
  color = '#4a9eff',
  geometry = 'torusKnot',
  characters = ' .:-+*=%@#',
  resolution = 0.2,
  rotationSpeed = { x: 0.0003, y: 0.0004, z: 0.0002 },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const effectRef = useRef<AsciiEffect | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const shapeRef = useRef<THREE.Mesh | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const frameIdRef = useRef<number | null>(null);

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
      2000
    );
    camera.position.y = 250; // Further increased for better view
    camera.position.z = 1000; // Further increased for better view
    cameraRef.current = camera;

    // Add lights
    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    // Create geometry based on the prop (scaled up even more)
    let objectGeometry;
    switch (geometry) {
      case 'sphere':
        objectGeometry = new THREE.SphereGeometry(300, 32, 32); // Further scaled up to 300
        break;
      case 'torus':
        objectGeometry = new THREE.TorusGeometry(300, 120, 16, 100); // Further scaled up to 300,120
        break;
      case 'torusKnot':
      default:
        objectGeometry = new THREE.TorusKnotGeometry(300, 90, 100, 16); // Further scaled up to 300,90
        break;
    }

    const material = new THREE.MeshPhongMaterial({ 
      flatShading: true,
      color: 0xffffff,
      emissive: 0x222222
    });
    
    const shape = new THREE.Mesh(objectGeometry, material);
    scene.add(shape);
    shapeRef.current = shape;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    rendererRef.current = renderer;

    // Initialize ASCII effect with lower resolution for larger characters
    const effect = new AsciiEffect(renderer, characters, { invert: true, resolution: Math.min(resolution, 0.15) });
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
      if (!shapeRef.current || !sceneRef.current || !cameraRef.current || !effectRef.current) return;
      
      const timer = Date.now() - startTimeRef.current;
      
      // Rotation animation
      shapeRef.current.rotation.x = timer * rotationSpeed.x;
      shapeRef.current.rotation.y = timer * rotationSpeed.y;
      shapeRef.current.rotation.z = timer * rotationSpeed.z;
      
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
    };
  }, [color, geometry, characters, resolution, rotationSpeed]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full"></div>
  );
};

export default CodeBlockBackground;
