// particles-background.jsx — gold-tinted particles on obsidian
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 1200 }) => {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        time: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.008 + Math.random() / 250,
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3,
        z: (Math.random() - 0.5) * 3,
      });
    }
    return temp;
  }, [count]);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3]     = particles[i].x;
      positions[i3 + 1] = particles[i].y;
      positions[i3 + 2] = particles[i].z;

      // Gold to warm amber palette
      const color = new THREE.Color();
      const goldVariant = Math.random();
      if (goldVariant > 0.6) {
        // Bright gold
        color.setRGB(0.94, 0.77, 0.22);
      } else if (goldVariant > 0.3) {
        // Warm amber
        color.setRGB(0.82, 0.6, 0.18);
      } else {
        // Dim warm white
        color.setRGB(0.72, 0.68, 0.52);
      }
      colors[i3]     = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [count, particles]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      // Hardware-accelerated rotation instead of heavy CPU coordinate recalculations
      mesh.current.rotation.y = time * 0.03;
      mesh.current.rotation.x = time * 0.015;
    }
    if (light.current) {
      light.current.position.set(
        Math.sin(time * 0.25) * 6,
        Math.sin(time * 0.4) * 5,
        Math.cos(time * 0.18) * 6
      );
    }
  });

  return (
    <group ref={mesh}>
      <pointLight ref={light} distance={30} intensity={3} color="#D4A843" />
      <points>
        <primitive attach="geometry" object={particlesGeometry} />
        <pointsMaterial
          attach="material"
          size={0.05}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.5}
        />
      </points>
    </group>
  );
};

const ParticlesBackground = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full"
      style={{ zIndex: 0, background: '#0c0d14', pointerEvents: 'none' }}
    >
      <Canvas camera={{ position: [0, 0, 4.5], fov: 70 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;