import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { PointerLockControls, Text } from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const MOVE_SPEED = 4

function PlayerMovement() {
  const { camera } = useThree()
  const keys = useRef({})

  useEffect(() => {
    const keyDown = (e) => {
      keys.current[e.code] = true
    }

    const keyUp = (e) => {
      keys.current[e.code] = false
    }

    window.addEventListener("keydown", keyDown)
    window.addEventListener("keyup", keyUp)

    return () => {
      window.removeEventListener("keydown", keyDown)
      window.removeEventListener("keyup", keyUp)
    }
  }, [])

  useFrame((_, delta) => {
    const forward = new THREE.Vector3()
    const right = new THREE.Vector3()

    camera.getWorldDirection(forward)

    forward.y = 0
    forward.normalize()

    right.crossVectors(forward, camera.up).normalize()

    if (keys.current["KeyW"]) {
      camera.position.addScaledVector(forward, MOVE_SPEED * delta)
    }

    if (keys.current["KeyS"]) {
      camera.position.addScaledVector(forward, -MOVE_SPEED * delta)
    }

    if (keys.current["KeyA"]) {
      camera.position.addScaledVector(right, -MOVE_SPEED * delta)
    }

    if (keys.current["KeyD"]) {
      camera.position.addScaledVector(right, MOVE_SPEED * delta)
    }

    // 防止走出走廊
    camera.position.x = THREE.MathUtils.clamp(
      camera.position.x,
      -3.8,
      3.8
    )

    camera.position.z = THREE.MathUtils.clamp(
      camera.position.z,
      -18,
      5
    )

    // 固定玩家高度
    camera.position.y = 0
  })

  return null
}

function CeilingLamp({ z }) {
  return (
    <group position={[0, 2.7, z]}>
      {/* 黑色吊线 */}
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.6, 8]} />
        <meshStandardMaterial color="#222222" />
      </mesh>

      {/* 灯罩 */}
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.45, 0.25, 0.28, 20]} />
        <meshStandardMaterial color="#262626" />
      </mesh>

      {/* 灯泡 */}
      <mesh position={[0, -0.23, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#fff0c4"
          emissive="#ffd88a"
          emissiveIntensity={3}
        />
      </mesh>

      <pointLight
        position={[0, -0.5, 0]}
        intensity={18}
        distance={8}
        color="#ffd59a"
      />
    </group>
  )
}

function WallSketch({ position, rotation, text }) {
  return (
    <group position={position} rotation={rotation}>
      {/* 像贴在墙上的纸 */}
      <mesh>
        <boxGeometry args={[1.35, 1.1, 0.025]} />
        <meshStandardMaterial color="#f7f3e8" />
      </mesh>

      <Text
        position={[0, 0, 0.03]}
        fontSize={0.14}
        color="#393939"
        anchorX="center"
        anchorY="middle"
        maxWidth={1}
        textAlign="center"
      >
        {text}
      </Text>
    </group>
  )
}

function Corridor() {
  return (
    <>
      {/* 地板 */}
      <mesh position={[0, -2, -7]}>
        <boxGeometry args={[9.5, 0.25, 28]} />
        <meshStandardMaterial
          color="#d7c3a3"
          roughness={0.85}
        />
      </mesh>

      {/* 左墙 */}
      <mesh position={[-4.75, 0.5, -7]}>
        <boxGeometry args={[0.25, 5, 28]} />
        <meshStandardMaterial
          color="#eeeae1"
          roughness={1}
        />
      </mesh>

      {/* 右墙 */}
      <mesh position={[4.75, 0.5, -7]}>
        <boxGeometry args={[0.25, 5, 28]} />
        <meshStandardMaterial
          color="#eeeae1"
          roughness={1}
        />
      </mesh>

      {/* 天花板 */}
      <mesh position={[0, 3, -7]}>
        <boxGeometry args={[9.5, 0.25, 28]} />
        <meshStandardMaterial color="#f4f1ea" />
      </mesh>

      {/* 尽头 */}
      <mesh position={[0, 0.5, -21]}>
        <boxGeometry args={[9.5, 5, 0.25]} />
        <meshStandardMaterial color="#f1eee6" />
      </mesh>

      {/* 尽头的亮出口 */}
      <mesh position={[0, 0.4, -20.82]}>
        <boxGeometry args={[2.8, 3.7, 0.05]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={1.6}
        />
      </mesh>

      {/* 木质踢脚线 左 */}
      <mesh position={[-4.55, -1.7, -7]}>
        <boxGeometry args={[0.12, 0.25, 28]} />
        <meshStandardMaterial color="#917456" />
      </mesh>

      {/* 木质踢脚线 右 */}
      <mesh position={[4.55, -1.7, -7]}>
        <boxGeometry args={[0.12, 0.25, 28]} />
        <meshStandardMaterial color="#917456" />
      </mesh>

      {/* 顶灯 */}
      <CeilingLamp z={2} />
      <CeilingLamp z={-3} />
      <CeilingLamp z={-8} />
      <CeilingLamp z={-13} />
      <CeilingLamp z={-18} />
      <JerkyDogDoor />

      {/* 左墙草图 */}
      <WallSketch
        position={[-4.58, 0.6, 2]}
        rotation={[0, Math.PI / 2, 0]}
        text={"LEVEL DESIGN\n\nBLOCKOUT\nPLAYER FLOW"}
      />

      <WallSketch
        position={[-4.58, 0.6, -8]}
        rotation={[0, Math.PI / 2, 0]}
        text={"GAME SYSTEMS\n\nIDEA\nITERATION"}
      />

      {/* 右墙草图 */}
      <WallSketch
        position={[4.58, 0.6, -3]}
        rotation={[0, -Math.PI / 2, 0]}
        text={"PLAYTEST\n\nOBSERVE\nIMPROVE"}
      />     

      {/* 环境补光 */}
      <ambientLight intensity={2.3} />

      <directionalLight
        position={[0, 6, 5]}
        intensity={2}
        color="#fff7e8"
      />
    </>
  )
}
function JerkyDogDoor() {
  return (
    <group
      position={[-4.58, -0.15, 1]}
      rotation={[0, Math.PI / 2, 0]}
      scale={0.88}
    >
      {/* 门框 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 4.1, 0.22]} />
        <meshStandardMaterial color="#8a6848" />
      </mesh>

      {/* 门板 */}
      <mesh position={[0, 0, 0.13]}>
        <boxGeometry args={[1.8, 3.65, 0.12]} />
        <meshStandardMaterial
          color="#e8dfcf"
          roughness={0.95}
        />
      </mesh>

      {/* 门牌 */}
      <mesh position={[0, 2.35, 0.08]}>
        <boxGeometry args={[2.15, 0.65, 0.14]} />
        <meshStandardMaterial color="#b88c5e" />
      </mesh>

      {/* 门牌文字 */}
      <Text
        position={[0, 2.35, 0.17]}
        fontSize={0.26}
        color="#28231f"
        anchorX="center"
        anchorY="middle"
      >
        DOG OF WAR
      </Text>

      {/* 临时狗狗图案 */}
      <Text
        position={[0, 0.6, 0.21]}
        fontSize={0.5}
        color="#37312b"
        anchorX="center"
        anchorY="middle"
      >
        DOG
      </Text>

      {/* 项目类型 */}
      <Text
        position={[0, -0.25, 0.21]}
        fontSize={0.14}
        color="#5c554d"
        anchorX="center"
        anchorY="middle"
      >
        LEVEL DESIGN
        {"\n"}
        EXPLORATION
      </Text>

      {/* 门把手 */}
      <mesh position={[0.62, -0.4, 0.25]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#3d3832"
          metalness={0.4}
        />
      </mesh>

      {/* 壁灯 */}
      <group position={[1.35, 0.8, 0.1]}>
        <mesh>
          <boxGeometry args={[0.18, 0.55, 0.15]} />
          <meshStandardMaterial color="#333333" />
        </mesh>

        <pointLight
          position={[0, 0, 0.3]}
          intensity={8}
          distance={4}
          color="#ffd49a"
        />
      </group>
    </group>
  )
}
function Scene() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#f2efe8",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 65,
        }}
      >
        <color attach="background" args={["#f2efe8"]} />

        <Corridor />

        <PlayerMovement />

        <PointerLockControls />
      </Canvas>

      {/* 中间准星 */}
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          width: "7px",
          height: "7px",
          border: "1px solid #333333",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* 左上角名字 */}
      <div
        style={{
          position: "fixed",
          top: "28px",
          left: "32px",
          color: "#222222",
          fontFamily: "Arial, sans-serif",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: "26px",
            fontWeight: "700",
            letterSpacing: "2px",
          }}
        >
          KANG JIN
        </div>

        <div
          style={{
            marginTop: "5px",
            fontSize: "12px",
            letterSpacing: "3px",
            opacity: 0.6,
          }}
        >
          GAME DESIGN PORTFOLIO
        </div>
      </div>

      {/* 操作提示 */}
      <div
        style={{
          position: "fixed",
          bottom: "25px",
          left: "32px",
          color: "#333333",
          fontSize: "12px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.8",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      >
        WASD&nbsp;&nbsp; MOVE
        <br />
        MOUSE&nbsp;&nbsp; LOOK
        <br />
        ESC&nbsp;&nbsp; RELEASE
      </div>
    </div>
  )
}

export default Scene