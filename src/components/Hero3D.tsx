'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Html, useProgress, useGLTF } from '@react-three/drei'
import { Suspense, useRef, Component, ReactNode } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ── Loading indicator ── */
function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-32 h-1 bg-space-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-white/65 text-xs">載入中 {progress.toFixed(0)}%</span>
      </div>
    </Html>
  )
}

/* ── Error Boundary for catching GLTF load failures ── */
interface EBProps { fallback: ReactNode; children: ReactNode }
interface EBState { hasError: boolean }
class GLTFErrorBoundary extends Component<EBProps, EBState> {
  constructor(props: EBProps) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

/* ── GLTF Motorcycle (runs inside error boundary) ── */
function GLTFMotorcycle() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/675NK.glb')

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} scale={2.25}>
      <primitive object={scene.clone()} />
    </group>
  )
}

useGLTF.preload('/models/675NK.glb')

/* ── Fallback: stylized motorcycle from primitives ── */
function FallbackMotorcycle() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} scale={2.25}>
      {/* Main body */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.6, 0.5, 1.8]} />
        <meshStandardMaterial color="#cc0000" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Tank top */}
      <mesh position={[0, 0.95, 0.1]}>
        <boxGeometry args={[0.5, 0.25, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Seat */}
      <mesh position={[0, 0.85, -0.7]}>
        <boxGeometry args={[0.45, 0.15, 0.9]} />
        <meshStandardMaterial color="#111111" metalness={0.3} roughness={0.8} />
      </mesh>
      {/* Front fork */}
      <mesh position={[0, 0.3, 0.9]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 1.2, 16]} />
        <meshStandardMaterial color="#888888" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Handlebar */}
      <mesh position={[0, 1.15, 0.55]}>
        <boxGeometry args={[0.9, 0.05, 0.08]} />
        <meshStandardMaterial color="#333333" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Swingarm */}
      <mesh position={[0, 0.25, -0.7]}>
        <boxGeometry args={[0.08, 0.08, 1.0]} />
        <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Exhaust */}
      <mesh position={[0.35, 0.2, -0.3]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.05, 0.07, 1.2, 16]} />
        <meshStandardMaterial color="#999999" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Front wheel */}
      <mesh position={[0, 0.1, 1.0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.25, 0.06, 16, 32]} />
        <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.6} />
      </mesh>
      {/* Rear wheel */}
      <mesh position={[0, 0.1, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.07, 16, 32]} />
        <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.6} />
      </mesh>
      {/* Headlight */}
      <mesh position={[0, 0.7, 0.95]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffcc" emissive="#ffff44" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

/* ── Smart Motorcycle: tries GLTF first, falls back to primitives ── */
function MotorcycleScene() {
  return (
    <GLTFErrorBoundary fallback={<FallbackMotorcycle />}>
      <Suspense fallback={<Loader />}>
        <GLTFMotorcycle />
      </Suspense>
    </GLTFErrorBoundary>
  )
}

/* ── Hero 3D Scene ── */
export default function Hero3D() {
  return (
    <div className="canvas-container w-full h-full">
      <Canvas
        camera={{ position: [3, 1.5, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <spotLight
          position={[5, 8, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
          color="#ffffff"
        />
        <spotLight
          position={[-5, 5, -5]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          color="#7c3aed"
        />
        <pointLight position={[0, 3, 0]} intensity={0.5} color="#ffcccc" />
        <directionalLight position={[3, 5, 2]} intensity={0.6} />

        <Suspense fallback={<Loader />}>
          <MotorcycleScene />
          <ContactShadows
            position={[0, 0.1, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
          />
          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={false}
          target={[0, 0.3, 0]}
        />
      </Canvas>
    </div>
  )
}
