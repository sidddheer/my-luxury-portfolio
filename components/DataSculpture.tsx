// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useRef } from 'react';
// import * as THREE from 'three';

// function Lattice() {
//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (!meshRef.current) return;
    
//     // Slow rotation
//     meshRef.current.rotation.y += 0.001;
//     meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;

//     // Mouse interaction
//     const { x, y } = state.mouse;
//     meshRef.current.rotation.x += y * 0.05;
//     meshRef.current.rotation.y += x * 0.05;
//   });

//   return (
//     <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
//       <icosahedronGeometry args={[1, 4]} /> 
//       <meshBasicMaterial 
//         color="#000000" 
//         wireframe={true}
//         transparent={true}
//         opacity={0.15} 
//       />
//     </mesh>
//   );
// }

// export default function DataSculpture() {
//   return (
//     <div className="absolute inset-0 -z-10 h-screen w-full opacity-60 pointer-events-none mix-blend-multiply">
//       <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
//         <Lattice />
//       </Canvas>
//     </div>
//   );
// }


// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// function Lattice() {
//   const meshRef = useRef<THREE.Mesh>(null);
//   // Track scroll position manually to avoid extra library installs
//   const scrollY = useRef(0);

//   // Listen to scroll events
//   useEffect(() => {
//     const handleScroll = () => {
//       scrollY.current = window.scrollY;
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useFrame((state) => {
//     if (!meshRef.current) return;

//     // 1. Time: Basic slow rotation (keeps it alive)
//     const time = state.clock.getElapsedTime();

//     // 2. Mouse: "Magnetic" Tilt
//     // We use 'lerp' (Linear Interpolation) to make the movement smooth, not jerky
//     // The numbers 0.5 and 0.1 control the "weight" of the object
//     const targetX = state.mouse.y * 0.5;
//     const targetY = state.mouse.x * 0.5;
    
//     meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.1;
//     meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.1;

//     // 3. Scroll: Spin faster based on how far down you are
//     // This gives a feeling of "churning data" as you explore the projects
//     meshRef.current.rotation.z = scrollY.current * 0.0005;
//     meshRef.current.position.y = -scrollY.current * 0.0002; // Subtle parallax drift

//     // 4. Organic "Breathing" motion
//     meshRef.current.scale.setScalar(2.5 + Math.sin(time * 0.5) * 0.1);
//   });

//   return (
//     <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
//       <icosahedronGeometry args={[1, 4]} /> 
//       <meshBasicMaterial 
//         color="#000000" 
//         wireframe={true}
//         transparent={true}
//         opacity={0.15} 
//       />
//     </mesh>
//   );
// }

// export default function DataSculpture() {
//   return (
//     // CHANGED: 'absolute' -> 'fixed'
//     // This ensures the 3D layer stays on screen while you scroll down the page
//     <div className="fixed inset-0 -z-10 h-screen w-full opacity-60 pointer-events-none mix-blend-multiply">
//       <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
//         <Lattice />
//       </Canvas>
//     </div>
//   );
// }


// 

// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useMemo, useRef, useEffect } from 'react';
// import * as THREE from 'three';

// function ParticleField() {
//   const count = 3000;
//   const mesh = useRef<THREE.Points>(null);
  
//   // 1. Mouse State (Global)
//   // We track the mouse manually to avoid "blocking" issues with the text layer
//   const mouse = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       // Normalize mouse position to range -1 to +1
//       mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // 2. Generate Particles
//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const d = 5;
//       const x = (Math.random() - 0.5) * d;
//       const y = (Math.random() - 0.5) * d;
//       const z = (Math.random() - 0.5) * d;
//       positions.set([x, y, z], i * 3);
//     }
//     return positions;
//   }, [count]);

//   useFrame((state) => {
//     if (!mesh.current) return;

//     const time = state.clock.getElapsedTime();

//     // 3. Automatic Rotation (The "Idle" Animation)
//     mesh.current.rotation.y = time * 0.05; // Spin slowly
//     mesh.current.rotation.x = time * 0.02; // Tilt slowly

//     // 4. Mouse Interaction (The "Active" Animation)
//     // We smoothly blend the current rotation towards the mouse position
//     const targetX = mouse.current.y * 0.5; // Look Up/Down
//     const targetY = mouse.current.x * 0.5; // Look Left/Right

//     // "Lerp" (Linear Interpolation) for smoothness
//     mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.02;
//     mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.02;
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         {/* The fix for the TypeScript error is included here */}
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particlesPosition, 3]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.035}          
//         color="#222222"      
//         sizeAttenuation={true}
//         transparent={true}
//         opacity={0.8}
//       />
//     </points>
//   );
// }

// export default function DataSculpture() {
//   return (
//     <div className="fixed inset-0 -z-10 h-screen w-full pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 4], fov: 60 }} dpr={[1, 2]}>
//         <ParticleField />
//       </Canvas>
//     </div>
//   );
// }


// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useMemo, useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// function ParticleField() {
//   const count = 4000; // Increased density for a richer look
//   const mesh = useRef<THREE.Points>(null);
  
//   // 1. Mouse State
//   const mouse = useRef({ x: 0, y: 0 });
  
//   // 2. Scroll State (We track this to make scrolling feel like "flying")
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     // Mouse Handler
//     const handleMouseMove = (event: MouseEvent) => {
//       // Normalize to -1 to +1
//       mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     // Scroll Handler
//     const handleScroll = () => {
//       // We normalize scroll to a usable number (0 to 10 roughly)
//       setScrollY(window.scrollY * 0.001);
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // 3. Generate Particles
//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const d = 6; // Wider spread
//       const x = (Math.random() - 0.5) * d;
//       const y = (Math.random() - 0.5) * d;
//       const z = (Math.random() - 0.5) * d;
//       positions.set([x, y, z], i * 3);
//     }
//     return positions;
//   }, [count]);

//   useFrame((state) => {
//     if (!mesh.current) return;

//     const time = state.clock.getElapsedTime();

//     // --- INTERACTION LOGIC ---

//     // A. SCROLL INTERACTION (The "Journey")
//     // As you scroll down, the cloud rotates faster and comes closer
//     // This creates a feeling of "diving into the data" as you read
//     mesh.current.rotation.z = scrollY * 0.2; // Twist as you scroll
//     mesh.current.position.z = scrollY * 0.5; // Fly forward as you scroll

//     // B. MOUSE INTERACTION (High Sensitivity)
//     // We multiplied the factor by 2.0 (was 0.5) to make it react to tiny movements
//     const targetX = mouse.current.y * 2.5; 
//     const targetY = mouse.current.x * 2.5;

//     // Smooth "Lerp" (Linear Interpolation)
//     // 0.05 is the speed. Higher = snappier, Lower = heavier
//     mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05;
//     mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05;

//     // C. IDLE "ALIVE" MOTION
//     // Even if the user does nothing, it slowly undulates
//     mesh.current.position.y = Math.sin(time * 0.5) * 0.1;
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particlesPosition, 3]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.03}          
//         color="#1a1a1a" // Slightly darker for better contrast      
//         sizeAttenuation={true}
//         transparent={true}
//         opacity={0.9}
//       />
//     </points>
//   );
// }

// export default function DataSculpture() {
//   return (
//     <div className="fixed inset-0 -z-10 h-screen w-full pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} dpr={[1, 2]}>
//         <ParticleField />
//       </Canvas>
//     </div>
//   );
// }






// Main 
// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useMemo, useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// function ParticleField() {
//   const count = 4000;
//   const mesh = useRef<THREE.Points>(null);
//   // Add a reference to the material to control its opacity
//   const materialRef = useRef<THREE.PointsMaterial>(null);
  
//   const mouse = useRef({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     const handleScroll = () => {
//       // Normalize scroll for easier calculations
//       setScrollY(window.scrollY * 0.0005);
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const d = 6;
//       const x = (Math.random() - 0.5) * d;
//       const y = (Math.random() - 0.5) * d;
//       const z = (Math.random() - 0.5) * d;
//       positions.set([x, y, z], i * 3);
//     }
//     return positions;
//   }, [count]);

//   useFrame((state) => {
//     if (!mesh.current || !materialRef.current) return;

//     const time = state.clock.getElapsedTime();

//     // --- INTERACTION LOGIC ---

//     // A. SCROLL INTERACTION (The "Journey")
//     mesh.current.rotation.z = scrollY * 0.2;
    
//     // Calculate forward position
//     const forwardPosition = scrollY * 2.0;
//     mesh.current.position.z = forwardPosition;

//     // --- NEW: PROXIMITY FADE ---
//     // As the cloud moves forward (forwardPosition increases),
//     // we decrease the opacity.
//     const baseOpacity = 0.9;
//     // Adjust fadeRate to control how quickly it disappears. Higher = faster fade.
//     const fadeRate = 0.4; 
//     let newOpacity = baseOpacity - (forwardPosition * fadeRate);

//     // Ensure opacity stays between 0 and the base level
//     newOpacity = Math.max(0, Math.min(baseOpacity, newOpacity));
    
//     // Apply the new opacity to the material
//     materialRef.current.opacity = newOpacity;

//     // B. MOUSE INTERACTION
//     const targetX = mouse.current.y * 2.5; 
//     const targetY = mouse.current.x * 2.5;
//     mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05;
//     mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05;

//     // C. IDLE MOTION
//     mesh.current.position.y = Math.sin(time * 0.5) * 0.1;
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particlesPosition, 3]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         ref={materialRef} // Attach the ref here
//         size={0.03}          
//         color="#1a1a1a"
//         sizeAttenuation={true}
//         transparent={true}
//         opacity={0.9} // Initial opacity
//       />
//     </points>
//   );
// }

// export default function DataSculpture() {
//   return (
//     // Keep the z-index at -10 so it stays in the background layer
//     <div className="fixed inset-0 -z-10 h-screen w-full pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} dpr={[1, 2]}>
//         <ParticleField />
//       </Canvas>
//     </div>
//   );
// }









// Dual Scene
// 'use client';

// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { useMemo, useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// // --- SCENE 1: THE CHAOTIC CLOUD (Hero Section) ---
// function RawDataCloud({ opacity }: { opacity: number }) {
//   const count = 4000;
//   const mesh = useRef<THREE.Points>(null);
//   const materialRef = useRef<THREE.PointsMaterial>(null);
//   const { mouse } = useThree();

//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const d = 8; // Wider spread
//       const x = (Math.random() - 0.5) * d;
//       const y = (Math.random() - 0.5) * d;
//       const z = (Math.random() - 0.5) * d;
//       positions.set([x, y, z], i * 3);
//     }
//     return positions;
//   }, [count]);

//   useFrame((state) => {
//     if (!mesh.current || !materialRef.current) return;
//     const time = state.clock.getElapsedTime();

//     // 1. Slow, chaotic rotation
//     mesh.current.rotation.y = time * 0.03;
//     mesh.current.rotation.z = time * 0.01;

//     // 2. Mouse Interaction (Parallax tilt)
//     const targetX = mouse.y * 1.5;
//     const targetY = mouse.x * 1.5;
//     mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05;
//     mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05;

//     // 3. Apply cross-fade opacity
//     // We multiply base opacity (0.8) by the transition opacity passed in prop
//     materialRef.current.opacity = 0.8 * opacity;
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particlesPosition, 3]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         ref={materialRef}
//         size={0.025}
//         color="#1a1a1a"
//         sizeAttenuation={true}
//         transparent={true}
//         // Opacity is controlled in useFrame
//       />
//     </points>
//   );
// }

// // --- SCENE 2: THE REFINED LATTICE (Projects Section) ---
// function RefinedLattice({ opacity }: { opacity: number }) {
//     const meshRef = useRef<THREE.Mesh>(null);
//     const materialRef = useRef<THREE.MeshBasicMaterial>(null);
//     const { mouse } = useThree();
  
//     useFrame((state) => {
//       if (!meshRef.current || !materialRef.current) return;
//       const time = state.clock.getElapsedTime();
  
//       // 1. Structured, elegant rotation
//       meshRef.current.rotation.y = time * 0.1; // Faster, smoother spin
//       meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1; // Gentle tilt

//       // 2. Subtle mouse reaction (less chaotic than the cloud)
//       meshRef.current.rotation.y += mouse.x * 0.02;
//       meshRef.current.rotation.x -= mouse.y * 0.02;
  
//       // 3. Apply cross-fade opacity
//       // Base opacity is lower (0.15) for a subtle wireframe look
//       materialRef.current.opacity = 0.15 * opacity;
      
//       // Hide completely if opacity is zero to save resources
//       meshRef.current.visible = opacity > 0.01;
//     });
  
//     return (
//       <mesh ref={meshRef} scale={[3.5, 3.5, 3.5]}>
//         {/* A complex geometric shape representing "Structure" */}
//         <icosahedronGeometry args={[1, 2]} /> 
//         <meshBasicMaterial 
//           ref={materialRef}
//           color="#000000" 
//           wireframe={true}
//           transparent={true}
//           // Opacity controlled in useFrame
//         />
//       </mesh>
//     );
//   }

// // --- MAIN COMPONENT ---
// export default function DataSculpture() {
//   // transitionProgress: 0 = Top of page (Chaos), 1 = Projects section (Structure)
//   const [transitionProgress, setTransitionProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Calculate how far down the user has scrolled.
//       // We want the transition to finish by the time they pass the hero section.
//       // Adjust 'window.innerHeight * 0.8' to tune when the transition happens.
//       const scrollRange = window.innerHeight * 0.8;
//       const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
//       setTransitionProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     // trigger once on load to set initial state
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="fixed inset-0 -z-10 h-screen w-full pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
//         {/* Both scenes are always present, but their opacity changes based on scroll.
//             Opacity of Cloud goes from 1 -> 0
//             Opacity of Lattice goes from 0 -> 1
//         */}
//         <RawDataCloud opacity={1 - transitionProgress} />
//         <RefinedLattice opacity={transitionProgress} />
//       </Canvas>
//     </div>
//   );
// }


// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useMemo, useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// function ParticleField() {
//   const count = 4000;
//   const mesh = useRef<THREE.Points>(null);
//   // Add a reference to the material to control its opacity dynamicallly
//   const materialRef = useRef<THREE.PointsMaterial>(null);
  
//   const mouse = useRef({ x: 0, y: 0 });
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     const handleScroll = () => {
//       // Normalize scroll for easier calculations
//       setScrollY(window.scrollY * 0.0005);
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       const d = 6; // Spread distance
//       const x = (Math.random() - 0.5) * d;
//       const y = (Math.random() - 0.5) * d;
//       const z = (Math.random() - 0.5) * d;
//       positions.set([x, y, z], i * 3);
//     }
//     return positions;
//   }, [count]);

//   useFrame((state) => {
//     if (!mesh.current || !materialRef.current) return;

//     const time = state.clock.getElapsedTime();

//     // --- INTERACTION LOGIC ---

//     // A. SCROLL INTERACTION (The "Journey")
//     mesh.current.rotation.z = scrollY * 0.2; // Twist
    
//     // Calculate forward movement based on scroll
//     const forwardPosition = scrollY * 2.0;
//     mesh.current.position.z = forwardPosition;

//     // --- PROXIMITY FADE ---
//     // As the cloud moves forward, decrease opacity so it doesn't block text
//     const baseOpacity = 0.9;
//     const fadeRate = 0.4; // How fast it fades out
//     let newOpacity = baseOpacity - (forwardPosition * fadeRate);

//     // Keep opacity between 0 and baseOpacity
//     newOpacity = Math.max(0, Math.min(baseOpacity, newOpacity));
    
//     // Apply the new opacity to the material every frame
//     materialRef.current.opacity = newOpacity;

//     // B. MOUSE INTERACTION (High Sensitivity Tilt)
//     const targetX = mouse.current.y * 2.5; 
//     const targetY = mouse.current.x * 2.5;
//     mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05;
//     mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05;

//     // C. IDLE MOTION
//     mesh.current.position.y = Math.sin(time * 0.5) * 0.1;
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particlesPosition, 3]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         ref={materialRef} // Important: attach ref to material
//         size={0.03}          
//         color="#1a1a1a"
//         sizeAttenuation={true}
//         transparent={true}
//         opacity={0.9} // Initial opacity
//       />
//     </points>
//   );
// }

// export default function DataSculpture() {
//   return (
//     <div className="fixed inset-0 -z-10 h-screen w-full pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} dpr={[1, 2]}>
//         <ParticleField />
//       </Canvas>
//     </div>
//   );
// }




'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function MorphingParticles() {
  const count = 4000;
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [initialPositions, spherePositions] = useMemo(() => {
    const startPos = new Float32Array(count * 3); 
    const endPos = new Float32Array(count * 3);   
    
    for (let i = 0; i < count; i++) {
      // STATE A: WIDE CLOUD
      const x = (Math.random() - 0.5) * 14; 
      const y = (Math.random() - 0.5) * 10; 
      const z = (Math.random() - 0.5) * 8;  
      startPos.set([x, y, z], i * 3);

      // STATE B: PERFECT SPHERE
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 1.3 * Math.cbrt(Math.random()); 
      
      const sx = r * Math.sin(phi) * Math.cos(theta);
      const sy = r * Math.sin(phi) * Math.sin(theta);
      const sz = r * Math.cos(phi);
      endPos.set([sx, sy, sz], i * 3);
    }
    return [startPos, endPos];
  }, []);

  const currentPositions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();
    const progress = Math.min(scrollY / 700, 1); 
    const smoothProgress = THREE.MathUtils.smoothstep(progress, 0, 1);

    const positionsAttribute = mesh.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      let x = THREE.MathUtils.lerp(initialPositions[ix], spherePositions[ix], smoothProgress);
      let y = THREE.MathUtils.lerp(initialPositions[iy], spherePositions[iy], smoothProgress);
      let z = THREE.MathUtils.lerp(initialPositions[iz], spherePositions[iz], smoothProgress);

      if (progress > 0.5) {
         x += Math.sin(time * 2 + y) * 0.005 * progress;
         y += Math.cos(time * 2 + x) * 0.005 * progress;
      } else {
         y += Math.sin(time + x) * 0.002;
      }

      currentPositions[ix] = x;
      currentPositions[iy] = y;
      currentPositions[iz] = z;
    }

    (positionsAttribute.array as Float32Array).set(currentPositions);
    positionsAttribute.needsUpdate = true;

    // Movement & Sensitivity
    const targetGroupX = THREE.MathUtils.lerp(0, -2.0, smoothProgress);
    mesh.current.position.x = targetGroupX;

    mesh.current.rotation.y += 0.001 + (smoothProgress * 0.005);
    
    // High sensitivity kept (it feels better to have control)
    const targetRotX = mouse.current.y * 1.2; 
    const targetRotY = mouse.current.x * 1.2;
    
    mesh.current.rotation.x += (targetRotX - mesh.current.rotation.x) * 0.15;
    mesh.current.rotation.z += (targetRotY - mesh.current.rotation.z) * 0.15;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[currentPositions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.055} 
        color="#111111" 
        sizeAttenuation={true}
        transparent={true}
        opacity={0.85}
      />
    </points>
  );
}

export default function DataSculpture() {
  return (
    // FIXED: Changed '-z-0' to 'z-0'
    <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <MorphingParticles />
      </Canvas>
    </div>
  );
}


