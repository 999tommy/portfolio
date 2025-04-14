import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.rotation.x = elapsedTime / 10;
    meshRef.current.rotation.y = elapsedTime / 15;
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial 
        color="#38bdf8"
        attach="material" 
        distort={0.5} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Model3D = () => {
  return (
    <div className="h-[400px] w-full text-white">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Model3D; 