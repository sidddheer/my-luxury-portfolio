// 'use client';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial } from '@react-three/drei';
// import { useState, useRef } from 'react';
// import * as random from 'maath/random/dist/maath-random.esm';

// const Particles = (props: any) => {
//   const ref = useRef<any>();
//   // Generate 2000 random points inside a sphere
//   const [sphere] = useState(() => random.inSphere(new Float32Array(2000 * 3), { radius: 1.5 }));

//   useFrame((state, delta) => {
//     if (ref.current) {
//       // Rotate the cloud slowly
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
//         <PointMaterial
//           transparent
//           color="#000000" // Black particles (since background will be white)
//           size={0.02}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const ThreeScene = () => {
//   return (
//     <div className="h-full w-full">
//       <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
//         <Particles />
//       </Canvas>
//     </div>
//   );
// };

// export default ThreeScene;

'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, useRef } from 'react';
// FIX 1: Use the correct, shorter import path
import * as random from 'maath/random';

const Particles = (props: any) => {
  // FIX 2: Initialize useRef with null to satisfy TypeScript
  const ref = useRef<any>(null);
  
  // FIX 3: Add 'as Float32Array' so TypeScript knows exactly what the data is
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(2000 * 3), { radius: 1.5 }) as Float32Array
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#000000"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ThreeScene;