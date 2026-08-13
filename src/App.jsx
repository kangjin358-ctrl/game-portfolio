import { useEffect, useState } from "react"

const projects = [
  {id:"monastery",title:"The Monastery",type:"Psychological Horror Game",role:"UI/UX & Game Designer",tools:"Unreal Engine 5 · Blueprint · Figma",year:"2025–2026",description:"A psychological horror prototype focused on oppressive atmosphere, environmental guidance and an unobtrusive player interface.",contributions:["Designed a heartbeat-based health display and five-slot radial inventory","Used lighting, contrast and interaction prompts to improve navigation","Iterated movement speed, pacing and readability after playtesting"]},
  {id:"hammer",title:"Before the Hammer Falls",type:"Auction & Bluffing Board Game",role:"Game & System Designer",tools:"Figma · Tabletop Prototyping · Playtesting",year:"2026",description:"A 3–4 player antique auction game built around hidden authenticity, inspection, bluffing and changing market trends.",contributions:["Created 24 antiques across four collections and a hidden-quality system","Balanced money, reputation, appraisal tokens, pawning and set bonuses","Expanded secret identities and revised the economy through playtests"],logo:"/before-the-hammer-falls.png"},
  {id:"element",title:"Element Forge",type:"AR Tactical Strategy Game",role:"Game Designer & Programmer",tools:"Unity 2022 · C# · AR Foundation",year:"2026",description:"An augmented-reality strategy game where physical cards create battlefields and deploy elemental units onto a tactical grid.",contributions:["Built a 10×10 placement grid and card-scanning deployment flow","Designed fire, water and wood counters with terrain bonuses","Created five maps with progressive enemy configurations and difficulty"]},
  {id:"dog",title:"Dog of War",type:"Open-world Island Adventure",role:"Level Designer",tools:"Unity · Blender · Maya · Playtesting",year:"2026",description:"A short open-world-style comedy game about a dog exploring a WWII island through destruction, platforming and discovery.",contributions:["Structured the island into military camp, jungle and open-plain zones","Reduced the map scale to support a focused 5–10 minute experience","Designed ability tutorials, signposting, exploration routes and multiple endings"]},
]

function ProjectModal({project,close}){
  useEffect(()=>{const escape=e=>e.key==="Escape"&&close();addEventListener("keydown",escape);return()=>removeEventListener("keydown",escape)},[close])
  return <div className="modal-backdrop" onMouseDown={close}><article className="modal" onMouseDown={e=>e.stopPropagation()}>
    <button className="modal-close" onClick={close} aria-label="Close project">×</button><span className="kicker">{project.role} · {project.year}</span>
    {project.logo?<img className="modal-logo" src={project.logo} alt="Before the Hammer Falls"/>:<h2>{project.title}</h2>}
    <p className="modal-type">{project.type}</p><p className="modal-lead">{project.description}</p><div className="tool-tag">{project.tools}</div>
    <h3>My contribution</h3><ul>{project.contributions.map(item=><li key={item}>{item}</li>)}</ul>
  </article></div>
}

export default function App(){
  const [selected,setSelected]=useState(null)
  return <div className="site">
    <header className="header"><a className="identity" href="#home"><strong>KANG JIN</strong><span>GAME DESIGN PORTFOLIO</span></a><nav><a href="#projects">Projects</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav></header>
    <main>
      <section className="hero" id="home"><div className="hero-copy"><span className="kicker">GAME DESIGN STUDENT · TEESSIDE UNIVERSITY</span><h1>Game Designer<br/><em>& Level Designer</em></h1><p>I design clear, engaging play spaces and gameplay systems through prototyping, playtesting and thoughtful iteration.</p><div className="hero-actions"><a className="button primary" href="#projects">View projects <span>↘</span></a><a className="button secondary" href="#contact">Contact me</a></div></div><div className="hero-visual" aria-hidden="true"><div className="arch arch-one"/><div className="arch arch-two"/><div className="light-well"/><div className="hero-caption">DESIGNING THE PATH<br/>BETWEEN PLAYER & WORLD</div></div></section>

      <section className="projects section" id="projects"><div className="section-heading"><div><span className="kicker">SELECTED WORK</span><h2>Four projects.<br/>Four design challenges.</h2></div><p>Explore my work across level design, systems, AR, UI/UX and tabletop design. Select a project to see my role and key contributions.</p></div><div className="project-grid">{projects.map((project,index)=><button className={`project-card visual-${project.id}`} key={project.id} onClick={()=>setSelected(project)}><div className="project-image">{project.logo?<img src={project.logo} alt=""/>:<><span className="project-index">{String(index+1).padStart(2,"0")}</span><div className="visual-mark"/></>}</div><div className="project-info"><span>{project.type}</span><h3>{project.title}</h3><div className="project-meta"><span>{project.role}</span><span>{project.year}</span></div></div></button>)}</div></section>

      <section className="about section" id="about"><div><span className="kicker">ABOUT ME</span><h2>I build spaces<br/>that teach through play.</h2></div><div className="about-copy"><p>I am a Game Design student at Teesside University with a growing focus on level design, gameplay systems and action-oriented experiences.</p><p>My process begins with player goals and clear spatial ideas. I move from research and blockout to playable prototypes, observe where players struggle, and revise scale, pacing, guidance and mechanics.</p><p>I enjoy working between creative design and technical implementation, using feedback to turn early ideas into readable and memorable experiences.</p></div></section>

      <section className="skills section" id="skills"><div className="section-heading"><div><span className="kicker">DESIGN TOOLKIT</span><h2>Skills & software</h2></div></div><div className="skill-grid"><div><span>01</span><h3>Design</h3><p>Level Design<br/>Game Systems<br/>UI/UX Design<br/>Prototyping<br/>Playtesting</p></div><div><span>02</span><h3>Engines & Code</h3><p>Unreal Engine 5<br/>Unity 2022 / Unity 6<br/>Blueprint<br/>C#</p></div><div><span>03</span><h3>Creative Tools</h3><p>Blender<br/>Maya<br/>Photoshop<br/>Figma</p></div></div></section>

      <section className="contact section" id="contact"><span className="kicker">LET'S CONNECT</span><h2>Interested in working<br/>together?</h2><p>I am open to internships, collaborative projects and conversations about game and level design.</p><div className="contact-links"><a href="mailto:m13701714139@163.com">m13701714139@163.com <span>↗</span></a><a href="https://github.com/kangjin358-ctrl" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="tel:+447765636973">UK · 07765 636973 <span>↗</span></a><a href="tel:+8619901855351">CN · 199 0185 5351 <span>↗</span></a></div></section>
    </main>
    <footer><span>© 2026 KANG JIN</span><a href="#home">BACK TO TOP ↑</a></footer>{selected&&<ProjectModal project={selected} close={()=>setSelected(null)}/>}
  </div>
}
