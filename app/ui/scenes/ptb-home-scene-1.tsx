import {
  OrbitControls,
  Environment,
  Stars,
  GizmoHelper,
  GizmoViewport,
  RoundedBox,
} from '@react-three/drei'

const Decorations = () => (
  <>
    {/* decorations start */}
    <group position={[0, 0, 0]}>
      <RoundedBox
        receiveShadow
        castShadow
        smoothness={10}
        radius={0.015}
        position={[-7, 1, 1.6]}
        scale={[4.2, 2, 2]}
      >
        <meshStandardMaterial
          color='#f4ae00'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </RoundedBox>
      <mesh position={[5, 1, 5]} castShadow>
        <icosahedronGeometry />
        <meshStandardMaterial
          color='#8e00f4'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
        />
      </mesh>
      <mesh
        receiveShadow
        castShadow
        rotation-x={-Math.PI / 2}
        position={[8, 1.1, 2]}
        scale={[2, 2, 2]}
      >
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshStandardMaterial
          color='#2d2d2d'
          envMapIntensity={0.5}
          roughness={0}
          metalness={0}
          wireframe
        />
      </mesh>
    </group>
    {/* decorations end */}
  </>
)

export const PtbHomeScene1 = () => {
  return (
    <>
      <OrbitControls />
      {/* <color attach="background" args={['#7e0']} /> */}
      <pointLight
        position={[10, 15, 15]}
        color='#570c0c'
        castShadow
        intensity={10}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <directionalLight
        position={[10, 15, -5]}
        color='#570c0c'
        castShadow
        intensity={7}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Environment preset='city' />
      {/* <ambientLight intensity={1}/> */}

      <GizmoHelper alignment='bottom-right' margin={[100, 100]}>
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor='white'
        />
      </GizmoHelper>

      <group position={[0, -3, 0]}>
        {/* wall */}
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial
            color='#2A302E'
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* ground */}
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial
            color='#212725'
            envMapIntensity={0.5}
            roughness={0}
            metalness={0.5}
          />
        </mesh>

        <Decorations/>
      </group>

      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={20}
        saturation={0}
        fade
        speed={1}
      />
    </>
  )
}
