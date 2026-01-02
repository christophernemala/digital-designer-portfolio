import { Canvas } from '@react-three/fiber';
import { Float, RoundedBox, Environment } from '@react-three/drei';

/**
 * 3D Hero Background Component
 * Premium $56K-range anime 3D floating elements
 * LOCKED PALETTE: Blue Gold White Black Only
 */

function FloatingCards() {
  return (
    <>
      {/* Gold accent card - top left */}
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
        <RoundedBox 
          args={[2.2, 1.2, 0.12]} 
          radius={0.12} 
          smoothness={6} 
          position={[-2.2, 1.2, -1]}
        >
          <meshStandardMaterial 
            color="#C8A951" 
            metalness={0.4} 
            roughness={0.2}
            emissive="#C8A951"
            emissiveIntensity={0.1}
          />
        </RoundedBox>
      </Float>

      {/* Electric blue card - center right */}
      <Float speed={1.2} rotationIntensity={0.7} floatIntensity={0.85}>
        <RoundedBox 
          args={[2.6, 1.35, 0.12]} 
          radius={0.14} 
          smoothness={6} 
          position={[2.0, 0.2, -0.5]}
        >
          <meshStandardMaterial 
            color="#3A6FF8" 
            metalness={0.35} 
            roughness={0.22}
            emissive="#3A6FF8"
            emissiveIntensity={0.15}
          />
        </RoundedBox>
      </Float>

      {/* Midnight card - bottom */}
      <Float speed={1.0} rotationIntensity={0.55} floatIntensity={0.8}>
        <RoundedBox 
          args={[1.9, 1.05, 0.12]} 
          radius={0.12} 
          smoothness={6} 
          position={[-0.8, -1.2, 0.25]}
        >
          <meshStandardMaterial 
            color="#0E1A2B" 
            metalness={0.3} 
            roughness={0.35}
          />
        </RoundedBox>
      </Float>

      {/* Royal blue card - far right */}
      <Float speed={0.9} rotationIntensity={0.5} floatIntensity={0.7}>
        <RoundedBox 
          args={[1.5, 0.9, 0.1]} 
          radius={0.1} 
          smoothness={6} 
          position={[3.0, -0.8, -1.5]}
        >
          <meshStandardMaterial 
            color="#1F3C88" 
            metalness={0.25} 
            roughness={0.3}
            emissive="#1F3C88"
            emissiveIntensity={0.08}
          />
        </RoundedBox>
      </Float>

      {/* Small gold accent - top right */}
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.0}>
        <RoundedBox 
          args={[0.8, 0.5, 0.08]} 
          radius={0.08} 
          smoothness={6} 
          position={[2.5, 1.8, -0.8]}
        >
          <meshStandardMaterial 
            color="#C8A951" 
            metalness={0.5} 
            roughness={0.15}
            emissive="#C8A951"
            emissiveIntensity={0.2}
          />
        </RoundedBox>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 6]} intensity={1.0} color="#F5F6F7" />
        <directionalLight position={[-4, -2, 4]} intensity={0.3} color="#3A6FF8" />
        <pointLight position={[0, 2, 3]} intensity={0.5} color="#C8A951" />
        <Environment preset="night" />
        <FloatingCards />
      </Canvas>
    </div>
  );
}
