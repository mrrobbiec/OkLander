import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { motion } from 'framer-motion';

interface AsciiAnimationProps {
  children?: React.ReactNode;
}

export const AsciiAnimation: React.FC<AsciiAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const effectRef = useRef<AsciiEffect | null>(null);
  const controlsRef = useRef<TrackballControls | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
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
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.y = 150;
    camera.position.z = 800;
    cameraRef.current = camera;

    // Add lights
    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    // Add a more complex shape - significantly larger
    const geometry = new THREE.TorusKnotGeometry(200, 60, 100, 16);
    const material = new THREE.MeshPhongMaterial({ 
      flatShading: true,
      color: 0xffffff,
      emissive: 0x222222
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);
    sphereRef.current = shape;


    // Initialize renderer - use full container size
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    // Initialize ASCII effect - with lower resolution for larger characters
    const effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true, resolution: 0.15 });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = '#4a9eff'; // Blue shade
    effect.domElement.style.backgroundColor = 'transparent';
    effect.domElement.style.position = 'absolute';
    effect.domElement.style.top = '0';
    effect.domElement.style.left = '0';
    effect.domElement.style.zIndex = '1';
    effect.domElement.style.opacity = '0.8'; // Make the ASCII effect slightly transparent
    effectRef.current = effect;

    // Add effect to container
    containerRef.current.appendChild(effect.domElement);

    // Initialize controls
    const controls = new TrackballControls(camera, effect.domElement);
    controls.noZoom = true;
    controls.noRotate = true;
    controlsRef.current = controls;

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !effectRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      effectRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      if (!sphereRef.current || !controlsRef.current || !sceneRef.current || !cameraRef.current || !effectRef.current) return;
      
      const timer = Date.now() - startTimeRef.current;
      
      // Smoother animation with less vertical movement
      sphereRef.current.position.y = Math.abs(Math.sin(timer * 0.0005)) * 50;
      // More rotation for a more dynamic effect
      sphereRef.current.rotation.x = timer * 0.0003;
      sphereRef.current.rotation.z = timer * 0.0002;
      sphereRef.current.rotation.y = timer * 0.0004;
      
      controlsRef.current.update();
      
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
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md">
      <div ref={containerRef} className="absolute inset-0 z-0"></div>
      
      {/* New scan lines overlay with higher contrast and visibility */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 0.5px, transparent 0.5px, transparent 3px)',
            backgroundSize: '100% 3.5px',
            opacity: 0.7,
            filter: 'blur(0.2px)',
          }}
        ></div>
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 0.5px, transparent 0.5px, transparent 7px)',
            backgroundSize: '100% 7.5px',
            animation: 'scanline-animation 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite',
            opacity: 0.8,
            filter: 'blur(0.3px)',
          }}
        ></div>
      </div>
      
      <style>
        {`
          @keyframes scanline-animation {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 0 7.5px;
            }
          }
        `}
      </style>
      
      <div className="relative z-20 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export function AsciiHero() {
  return (
    <AsciiAnimation>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 py-4 text-center text-5xl font-bold tracking-tight text-white md:text-7xl font-serif"
        style={{ letterSpacing: "-0.05em", textShadow: "0 0 8px rgba(0,0,0,0.7)" }}
      >
        Step boldly into the agentic era of data. Harness real-time ML, interactive “datarticles,” and streamlined pipelines–all without the overhead. Welcome to the future of BI.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-white text-center text-xl max-w-2xl font-sans font-medium drop-shadow-md"
        style={{ textShadow: "0 0 8px rgba(0,0,0,0.7)" }}
      >
        Unleash your data’s potential. Simplify everything. Supercharge innovation.
      </motion.p>
    </AsciiAnimation>
  );
}
