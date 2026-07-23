import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Inline GLSL shaders (no file import needed)
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  varying vec2  vUv;

  // Simplex-style noise helpers
  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
           + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                             dot(x12.zw,x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x * x0.x  + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // Fast 2-octave FBM for inner domain warping
  float fbmLow(vec2 uv) {
    float v = 0.0;
    float a = 0.5;
    vec2  shift = vec2(100.0);
    mat2  rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    v += a * snoise(uv);
    uv = rot * uv * 2.0 + shift;
    a *= 0.5;
    v += a * snoise(uv);
    return v;
  }

  // Fast 3-octave FBM for final noise computation
  float fbmMed(vec2 uv) {
    float v = 0.0;
    float a = 0.5;
    vec2  shift = vec2(100.0);
    mat2  rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    v += a * snoise(uv);
    uv = rot * uv * 2.0 + shift;
    a *= 0.5;
    v += a * snoise(uv);
    uv = rot * uv * 2.0 + shift;
    a *= 0.5;
    v += a * snoise(uv);
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float t  = uTime * 0.18;

    // Mouse influence
    vec2 mouse = uMouse * 0.5 + 0.5;
    float mouseDist = length(uv - mouse);
    float mouseInfl = smoothstep(0.6, 0.0, mouseDist) * 0.3;

    // Layered noise for flowing energy
    vec2 q;
    q.x = fbmLow(uv + 0.1 * t);
    q.y = fbmLow(uv + vec2(1.0));

    vec2 r;
    r.x = fbmLow(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t + mouseInfl);
    r.y = fbmLow(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

    float f = fbmMed(uv + r);
    f = clamp((f * f * f + 0.6 * f * f + 0.5 * f) * 0.6, 0.0, 1.0);

    // Deep obsidian base
    vec3 obsidian = vec3(0.027, 0.031, 0.059);
    // Electric amber energy
    vec3 amber    = vec3(0.910, 0.510, 0.039);
    vec3 amberDim = vec3(0.380, 0.220, 0.020);
    // Subtle purple/blue accent
    vec3 indigo   = vec3(0.085, 0.065, 0.180);

    // Mix layers
    vec3 color = mix(obsidian, indigo,  clamp(f * 2.0, 0.0, 1.0));
    color      = mix(color,    amberDim, clamp(f * f * 4.0, 0.0, 1.0));
    color      = mix(color,    amber,   pow(clamp(f * 1.7, 0.0, 1.0), 3.0));

    // Vignette
    float vig = 1.0 - smoothstep(0.35, 1.4, length(uv - vec2(0.5, 0.5)) * 1.7);
    color *= vig;

    // Edge darken  
    color = mix(color, obsidian, (1.0 - vig) * 0.6);

    // Subtle grain
    float grain = snoise(uv * 800.0 + t * 10.0) * 0.025;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`;

const ShaderPlane = ({ mouseRef }) => {
  const matRef = useRef();

  const uniforms = useMemo(() => ({
    uTime:       { value: 0 },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uMouse:      { value: new THREE.Vector2(0.5, 0.5) },
  }), []);

  useFrame(({ clock }) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.getElapsedTime();
    if (mouseRef.current) {
      // Accept plain {x,y} object or THREE.Vector2
      const mx = mouseRef.current.x ?? 0;
      const my = mouseRef.current.y ?? 0;
      matRef.current.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mx * 0.5 + 0.5, my * 0.5 + 0.5),
        0.05
      );
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

const WebGLHero = ({ mouseRef }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.0 }
    );

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 1.25)}
        frameloop={isVisible ? 'always' : 'never'}
        camera={{ position: [0, 0, 1], near: 0.1, far: 10 }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <ShaderPlane mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
};

export default WebGLHero;
