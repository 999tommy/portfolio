import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 1500 }) => {
  const mesh = useRef();
  const light = useRef();

  // Generate random particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;

      temp.push({ time, factor, speed, x, y, z, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  // Create the particle geometry
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = particles[i].x;
      positions[i3 + 1] = particles[i].y;
      positions[i3 + 2] = particles[i].z;
      
      // Assign colors based on position with brighter colors
      const color = new THREE.Color();
      // Use our new color scheme (blue to purple)
      color.setHSL(0.6 + 0.1 * Math.random(), 0.8, 0.6 + 0.3 * Math.random());
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [count, particles]);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Update particles position
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      particlesGeometry.attributes.position.array[i3 + 1] += Math.cos(time * particles[i].speed + particles[i].factor) * 0.001;
      particlesGeometry.attributes.position.array[i3 + 2] += Math.sin(time * particles[i].speed + particles[i].factor) * 0.001;
    }
    
    particlesGeometry.attributes.position.needsUpdate = true;
    light.current.position.set(
      Math.sin(time * 0.3) * 8,
      Math.sin(time * 0.5) * 6,
      Math.cos(time * 0.2) * 8
    );
  });
  
  return (
    <group ref={mesh}>
      <pointLight ref={light} distance={40} intensity={5} color="#38bdf8" />
      <points>
        <primitive attach="geometry" object={particlesGeometry} />
        <pointsMaterial
          attach="material"
          size={0.07}
          sizeAttenuation={true}
          vertexColors
          transparent
          alphaTest={0.5}
          opacity={0.7}
        />
      </points>
    </group>
  );
};

const ParticlesBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-gradient-to-b from-primary-dark to-primary">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground; 