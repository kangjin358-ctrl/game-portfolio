import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { PointerLockControls, Text } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

const projects = [
  { title:"THE MONASTERY", subtitle:"Psychological Horror UI", role:"UI/UX & Game Designer", tools:"Unreal Engine 5 · Blueprint · Figma", date:"2025–2026", summary:"A psychological horror prototype set in a monastery-like corridor. I designed an understated HUD, radial inventory and environmental guidance for a tense, readable experience.", points:["Heartbeat health feedback","Five-slot radial inventory","Environmental interaction guidance"] },
  { title:"时代收藏家", logo:"/before-the-hammer-falls.png", subtitle:"Auction & Bluffing Board Game", role:"Game & System Designer", tools:"Tabletop Prototyping · Figma · Playtesting", date:"2026", summary:"A 3–4 player auction game about collecting antiques with hidden authenticity. Players inspect, bluff, pawn and bid while pursuing sets, trends and secret identities.", points:["Hidden-value auction system","24 antiques across four collections","Economy refined through playtests"] },
  { title:"ELEMENT FORGE", subtitle:"AR Element Strategy Game", role:"Game Designer & Programmer", tools:"Unity 2022 · C# · AR Foundation", date:"2026", summary:"An AR tactical battle game built around fire, water and wood counters. Scanning cards creates units and battlefields, while elemental terrain rewards deliberate placement.", points:["Five tactical battle maps","10×10 placement grid","Element counters and terrain bonuses"] },
  { title:"DOG OF WAR", subtitle:"Open-world Island Adventure", role:"Level Designer", tools:"Unity · Blender · Maya · Playtesting", date:"2026", summary:"A chaotic open-world-style exploration game set on a WWII island. I designed the jungle, military camp and open plain, then reduced the map through playtesting to keep the experience within 5–10 minutes.", points:["Three-zone island layout","Movement-skill tutorial spaces","Multiple endings and exploration routes"] },
]

const inspirations = [
  { title:"Guiding Players Without Words", text:"I explore how lighting, colour, composition and landmarks can guide players without relying on large amounts of instructional text.", application:"Important routes and interactive objects use brighter lighting and stronger colour contrast, while background elements remain quieter." },
  { title:"Teaching Mechanics Through Space", text:"I treat the environment as part of the tutorial, creating safe spaces where players can experiment before mechanics are combined with new risks.", application:"Each mechanic progresses from introduction, to practice, and finally to mastery through level layout." },
]

const growth = [
  { part:"ROOTS", title:"Discovering Game Design", text:"I moved from simply playing games to analysing navigation, challenge, feedback and the reasons behind each design decision." },
  { part:"TRUNK", title:"Building My Foundations", text:"Studying Game Design at Teesside University helped me turn ideas into playable prototypes using Unity, Unreal Engine 5, C# and Blueprint." },
  { part:"LEAVES", title:"Learning Through Iteration", text:"Team projects and playtests taught me to collect feedback and revise scale, pacing, guidance and mechanics to create clearer player experiences." },
]

const corridorDoors = [
  ...projects.map(project => ({ title:project.title, label:project.role, project })),
  { title:"CONTACT ME", label:"LET'S CONNECT", view:"contact" },
]

function Movement({ paused }) {
  const { camera } = useThree()
  const keys = useRef({})
  useEffect(() => {
    const down = e => { keys.current[e.code] = true }
    const up = e => { keys.current[e.code] = false }
    addEventListener("keydown", down); addEventListener("keyup", up)
    return () => { removeEventListener("keydown", down); removeEventListener("keyup", up) }
  }, [])
  useFrame((_, dt) => {
    if (paused) return
    const f = new THREE.Vector3(), r = new THREE.Vector3()
    camera.getWorldDirection(f); f.y = 0; f.normalize()
    r.crossVectors(f, camera.up).normalize()
    if (keys.current.KeyW) camera.position.addScaledVector(f, 4*dt)
    if (keys.current.KeyS) camera.position.addScaledVector(f, -4*dt)
    if (keys.current.KeyA) camera.position.addScaledVector(r, -4*dt)
    if (keys.current.KeyD) camera.position.addScaledVector(r, 4*dt)
    camera.position.x = THREE.MathUtils.clamp(camera.position.x,-12,12)
    camera.position.z = THREE.MathUtils.clamp(camera.position.z,-18,5)
    camera.position.y = 0
  })
  return null
}

function Lamp({ z }) {
  return <group position={[0,2.7,z]}>
    <mesh position={[0,.28,0]}><cylinderGeometry args={[.025,.025,.6,8]}/><meshStandardMaterial color="#191919"/></mesh>
    <mesh position={[0,-.08,0]}><cylinderGeometry args={[.45,.25,.28,20]}/><meshStandardMaterial color="#262626"/></mesh>
    <mesh position={[0,-.23,0]}><sphereGeometry args={[.12,16,16]}/><meshStandardMaterial color="#fff0c4" emissive="#ffd88a" emissiveIntensity={3}/></mesh>
    <pointLight position={[0,-.5,0]} intensity={17} distance={8} color="#ffd59a"/>
  </group>
}

function Door({ item, index, open }) {
  const left = index%2===0, z = 2-index*5
  const pivot = useRef()
  useFrame((_,dt) => {
    const target = open ? (left ? -Math.PI/2 : Math.PI/2) : 0
    if (pivot.current) pivot.current.rotation.y = THREE.MathUtils.damp(pivot.current.rotation.y,target,6,dt)
  })
  return <group position={[left?-4.58:4.58,-.2,z]} rotation={[0,left?Math.PI/2:-Math.PI/2,0]}>
    <mesh position={[0,2.58,-.02]}><boxGeometry args={[3.15,1.18,.28]}/><meshStandardMaterial color="#d9d3c8"/></mesh>
    <mesh position={[-1.34,0,0]}><boxGeometry args={[.42,4.25,.28]}/><meshStandardMaterial color="#5d4633"/></mesh>
    <mesh position={[1.34,0,0]}><boxGeometry args={[.42,4.25,.28]}/><meshStandardMaterial color="#5d4633"/></mesh>
    <mesh position={[0,2.02,0]}><boxGeometry args={[3.1,.28,.28]}/><meshStandardMaterial color="#5d4633"/></mesh>
    <group ref={pivot} position={[-1.04,0,.14]}>
      <group position={[1.04,0,0]}>
        <mesh><boxGeometry args={[2.08,3.75,.12]}/><meshStandardMaterial color={left?"#ded3bf":"#c9d1c8"} roughness={.9}/></mesh>
        <mesh position={[0,1.45,.08]}><boxGeometry args={[1.75,.74,.07]}/><meshStandardMaterial color="#181716"/></mesh>
        <Text position={[0,1.45,.13]} fontSize={.17} color="#f4ead7" maxWidth={1.55} textAlign="center">{item.title}</Text>
        <Text position={[0,.35,.13]} fontSize={.11} color="#443d35" maxWidth={1.55} textAlign="center">{item.label.toUpperCase()}</Text>
        <mesh position={[.72,-.55,.13]}><sphereGeometry args={[.085,16,16]}/><meshStandardMaterial color="#282522" metalness={.55}/></mesh>
      </group>
    </group>
  </group>
}

const roomThemes = [
  { floor:"#272321", wall:"#4b403b", light:"#8da0b8", title:"HORROR ARCHIVE" },
  { floor:"#503a25", wall:"#80613d", light:"#ffca73", title:"AUCTION HALL" },
  { floor:"#193b3d", wall:"#255b5d", light:"#72e6d1", title:"AR LABORATORY" },
  { floor:"#3c4930", wall:"#65734d", light:"#e4b56b", title:"ISLAND WAR ROOM" },
  { floor:"#26313c", wall:"#536678", light:"#b8d8f2", title:"CONTACT STUDIO" },
]

function ProjectRoom({ item,index }) {
  const left=index%2===0, z=2-index*5, direction=left?-1:1, centerX=direction*8.4
  const theme=roomThemes[index]
  return <group>
    <mesh position={[centerX,-2,z]}><boxGeometry args={[7.4,.25,4.5]}/><meshStandardMaterial color={theme.floor}/></mesh>
    <mesh position={[direction*12.05,.3,z]}><boxGeometry args={[.22,4.7,4.5]}/><meshStandardMaterial color={theme.wall}/></mesh>
    <mesh position={[centerX,.3,z-2.25]}><boxGeometry args={[7.4,4.7,.22]}/><meshStandardMaterial color={theme.wall}/></mesh>
    <mesh position={[centerX,.3,z+2.25]}><boxGeometry args={[7.4,4.7,.22]}/><meshStandardMaterial color={theme.wall}/></mesh>
    <mesh position={[centerX,2.65,z]}><boxGeometry args={[7.4,.18,4.5]}/><meshStandardMaterial color="#171716"/></mesh>
    <pointLight position={[centerX,1.7,z]} intensity={18} distance={8} color={theme.light}/>
    <Text position={[direction*11.85,.8,z]} rotation={[0,left?Math.PI/2:-Math.PI/2,0]} fontSize={.34} color="#f4eee4" maxWidth={3.2} textAlign="center">{theme.title}</Text>
    <Text position={[direction*11.82,.15,z]} rotation={[0,left?Math.PI/2:-Math.PI/2,0]} fontSize={.15} color={theme.light} maxWidth={3} textAlign="center">{item.title}</Text>
  </group>
}

function SideWall({ left }) {
  const doorZ = corridorDoors.map((_,i)=>(i%2===0)===left ? 2-i*5 : null).filter(v=>v!==null)
  const panels=[]
  for(let z=4;z>=-20;z-=1) {
    if(!doorZ.some(d=>Math.abs(d-z)<1.35)) panels.push(z)
  }
  return <>{panels.map(z=><mesh key={z} position={[left?-4.75:4.75,.5,z]}><boxGeometry args={[.25,5,1.05]}/><meshStandardMaterial color="#d9d3c8"/></mesh>)}</>
}

function Corridor({ paused, onNear }) {
  const { camera }=useThree()
  const [opened,setOpened]=useState({})
  const nearestRef=useRef(null)
  useFrame(()=>{
    let nearest=null, distance=2.25
    corridorDoors.forEach((_,i)=>{
      const left=i%2===0, z=2-i*5
      const d=Math.hypot(camera.position.x-(left?-4.25:4.25),camera.position.z-z)
      if(d<distance){distance=d;nearest=i}
    })
    if(nearest!==nearestRef.current){nearestRef.current=nearest;onNear(nearest===null?null:corridorDoors[nearest])}
  })
  useEffect(()=>{
    const interact=e=>{
      if(e.code==="KeyE"&&nearestRef.current!==null){
        const i=nearestRef.current
        setOpened(current=>({...current,[i]:!current[i]}))
      }
    }
    addEventListener("keydown",interact)
    return()=>removeEventListener("keydown",interact)
  },[])
  return <>
    <mesh position={[0,-2,-7]}><boxGeometry args={[9.5,.25,28]}/><meshStandardMaterial color="#a89478" roughness={.9}/></mesh>
    <SideWall left/><SideWall left={false}/>
    <mesh position={[0,3,-7]}><boxGeometry args={[9.5,.25,28]}/><meshStandardMaterial color="#e9e5dc"/></mesh>
    <mesh position={[0,.5,-21]}><boxGeometry args={[9.5,5,.25]}/><meshStandardMaterial color="#d3cdc2"/></mesh>
    <mesh position={[0,.4,-20.82]}><boxGeometry args={[2.8,3.7,.05]}/><meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={1.5}/></mesh>
    <mesh position={[-4.55,-1.7,-7]}><boxGeometry args={[.12,.25,28]}/><meshStandardMaterial color="#644b36"/></mesh>
    <mesh position={[4.55,-1.7,-7]}><boxGeometry args={[.12,.25,28]}/><meshStandardMaterial color="#644b36"/></mesh>
    {[2,-3,-8,-13,-18].map(z=><Lamp key={z} z={z}/>)}
    {corridorDoors.map((item,i)=><Door key={item.title} item={item} index={i} open={Boolean(opened[i])}/>)}
    {corridorDoors.map((item,i)=><ProjectRoom key={item.title} item={item} index={i}/>)}
    <Text position={[0,1.05,-20.65]} fontSize={.24} color="#4b443c">KEEP EXPLORING</Text>
    <ambientLight intensity={1.7}/><directionalLight position={[0,6,5]} intensity={1.7} color="#fff5df"/>
    <Movement paused={paused}/>
  </>
}

function Panel({ view, project, close, select }) {
  return <div className="backdrop" onMouseDown={close}><article className="panel" onMouseDown={e=>e.stopPropagation()}>
    <button className="close" onClick={close}>×</button>
    {view==="about" && <><span className="eyebrow">ABOUT ME</span><h1>Kang Jin</h1><p className="lead">Game Design student focused on level design, gameplay systems and interactive experiences.</p><p>I build spaces that teach through play. My process moves from research and blockout to rapid iteration, playtesting and refinement. I enjoy action-focused design, environmental storytelling and mechanics that create meaningful player choices.</p><p>Currently studying Game Design at Teesside University in the United Kingdom.</p></>}
    {view==="skills" && <><span className="eyebrow">DESIGN TOOLKIT</span><h1>Skills</h1><div className="skills"><div><h3>Design</h3><p>Level Design<br/>Game Systems<br/>UI/UX Design<br/>Prototyping<br/>Playtesting</p></div><div><h3>Engines</h3><p>Unreal Engine 5<br/>Unity 2022 / Unity 6<br/>Blueprint<br/>C#</p></div><div><h3>Creative</h3><p>Blender<br/>Maya<br/>Photoshop<br/>Figma</p></div></div></>}
    {view==="creative" && <><span className="eyebrow">IDEAS & INSPIRATION</span><h1>Creative Space</h1><p className="lead">Two ideas that shape how I approach game and level design.</p><div className="records">{inspirations.map((item,i)=><section key={item.title}><span>0{i+1}</span><h2>{item.title}</h2><p>{item.text}</p><p><strong>Design application:</strong> {item.application}</p></section>)}</div></>}
    {view==="growth" && <><span className="eyebrow">MY JOURNEY</span><h1>Growth Tree</h1><p className="lead">The roots represent curiosity, the trunk represents technical foundations, and every leaf records a lesson learned through making games.</p><div className="records growth">{growth.map(item=><section key={item.part}><span>{item.part}</span><h2>{item.title}</h2><p>{item.text}</p></section>)}</div></>}
    {view==="contact" && <><span className="eyebrow">LET'S CONNECT</span><h1>Contact</h1><p className="lead">Open to game design collaborations, internships and portfolio conversations.</p><div className="contact-links"><a className="link" href="mailto:m13701714139@163.com">Email ↗</a><a className="link" href="tel:+8619901855351">19901855351</a><a className="link" href="tel:+447765636973">07765636973</a><a className="link" href="https://github.com/kangjin358-ctrl" target="_blank" rel="noreferrer">GitHub ↗</a></div><p className="note">m13701714139@163.com</p></>}
    {view==="projects" && !project && <><span className="eyebrow">SELECTED WORK</span><h1>Project Archive</h1><div className="list">{projects.map((p,i)=><button key={p.title} onClick={()=>select(p)}><span>{String(i+1).padStart(2,"0")}</span><strong>{p.title}</strong><small>{p.role}</small></button>)}</div></>}
    {project && <><span className="eyebrow">{project.role} · {project.date}</span>{project.logo ? <img className="project-logo" src={project.logo} alt="Before the Hammer Falls" /> : <h1>{project.title}</h1>}<h2>{project.subtitle}</h2><p className="lead">{project.summary}</p><div className="tools">{project.tools}</div><h3>Design highlights</h3><ul>{project.points.map(x=><li key={x}>{x}</li>)}</ul><button className="link" onClick={()=>select(null)}>← All projects</button></>}
  </article></div>
}

export default function Scene() {
  const [view,setView]=useState(null), [project,setProject]=useState(null)
  const [nearDoor,setNearDoor]=useState(null)
  const open = v => { setProject(null); setView(v); document.exitPointerLock?.() }
  const close = () => { setView(null); setProject(null) }
  return <main className="shell">
    <Canvas camera={{position:[0,0,5],fov:65}}><color attach="background" args={["#d8d2c7"]}/><Corridor paused={!!view} onNear={setNearDoor}/>{!view&&<PointerLockControls/>}</Canvas>
    <header><button className="brand" onClick={()=>open("about")}><strong>KANG JIN</strong><span>GAME DESIGN PORTFOLIO</span></button><nav>{["projects","contact"].map(x=><button key={x} onClick={()=>open(x)}>{x}</button>)}</nav></header>
    <div className="crosshair"/>{nearDoor&&!view&&<div className="interact">PRESS <b>E</b> TO OPEN · {nearDoor.title}</div>}<div className="instructions"><b>CLICK TO EXPLORE</b><br/>WASD · MOVE&nbsp;&nbsp; MOUSE · LOOK&nbsp;&nbsp; E · OPEN&nbsp;&nbsp; ESC · RELEASE</div>
    <div className="dock">{corridorDoors.map(item=><button key={item.title} onClick={()=>{setProject(item.project||null);setView(item.project?"project":item.view)}}>{item.title}</button>)}</div>
    {view&&<Panel view={view} project={project} close={close} select={p=>{setProject(p);setView(p?"project":"projects")}}/>}
  </main>
}
