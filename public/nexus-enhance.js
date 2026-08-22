const nxCopy={
en:{hero:"Physical cards become a tactical battlefield",intro:"NEXUS CARDS is an AR tactical card game combining physical card scanning, unit deployment, elemental strategy and automatic combat. Players scan a level card to create a 10×10 battlefield, deploy units across Fire, Water and Wood regions, then confirm their formation and watch the battle resolve.",insight:"The decisive choices happen before combat: card choice, grid position, terrain match-up and team composition directly shape the outcome.",foundation:"Design Foundation",units:"Elemental Units",levels:"Five-Level Progression",systems:"Technical Systems",outcome:"Outcome & Reflection",unitNote:"Scanning previews each character at its physical card position. Confirmation snaps a battle-ready instance to the nearest grid cell.",levelNote:"Five maps introduce one idea at a time, then combine terrain, counters and enemy formations.",result:"The prototype completes a full loop from physical recognition and tactical placement to automatic combat and result handling.",flow:["Select Level","Scan Battlefield","Deploy Units","Confirm","Auto Battle","Result"]},
zh:{hero:"实体卡牌成为战术战场",intro:"NEXUS CARDS 是一款 AR 战术卡牌游戏，将实体卡牌扫描、单位部署、元素策略与自动战斗结合。玩家扫描关卡卡牌生成 10×10 战场，再将单位部署到火、水、木区域，确认阵型后观看战斗自动展开。",insight:"决定胜负的关键发生在战斗开始前：卡牌选择、网格位置、地形匹配与队伍构成会直接影响结果。",foundation:"设计基础",units:"元素单位",levels:"五关递进",systems:"技术系统",outcome:"成果与反思",unitNote:"扫描后角色会在实体卡牌位置预览；确认后，战斗实例吸附到最近的网格单元。",levelNote:"五张地图逐步引入机制，最终综合地形、元素克制与敌方阵型。",result:"该原型完成了从实体识别、战术放置、自动战斗到结果判断的完整闭环。",flow:["选择关卡","扫描战场","部署单位","确认阵型","自动战斗","显示结果"]}}
const units=[
["fire","Flame Warrior","Skeleton Unit","Melee DPS · High Attack · Fire","A close-range damage dealer that gains bonus damage in Fire regions and pressures the enemy front line.","近战输出单位，在火焰区域获得伤害加成，适合快速突破敌方前排。"],
["water","Water Guardian","Orc Unit","Tank · High Defense · Water","A defensive unit that receives damage reduction in Water regions and protects more fragile allies.","高生存前排单位，在水域获得减伤，负责保护较脆弱的队友。"],
["wood","Forest Ranger","Spider Unit","Ranged DPS · Sustained Damage · Wood","A ranged attacker that deals steady damage and regenerates health in Wood regions.","远程持续输出单位，在木属性区域恢复生命，从安全距离维持战斗。"]]
const levels=[
["1","Water Terrain","Open paths introduce placement and Water defense.","开放路径介绍基础放置与水域防御。"],
["2","Fire Battlefield","Narrow routes make elemental choice more important.","狭窄路线让元素选择更加重要。"],
["3","Forest Ruins","Obstacles and Forest zones test ranged positioning.","障碍与森林区域考验远程站位。"],
["4","Mixed Battlefield","Three elements require counter-planning.","三种元素同场，要求综合规划克制。"],
["5","Element Core","The final arena combines terrain buffs and stronger formations.","终局战场综合地形增益与更强阵型。"]]
const systems=[
["BoardGridManager","Snaps world positions to the nearest cell and drives the placement indicator.","将世界坐标吸附到最近网格并驱动放置指示器。","code-grid"],
["ARCharacterPlacement","Keeps the scanned preview on its card, then confirms it to the board with cooldown and limits.","让扫描预览跟随卡牌，并通过冷却与次数限制确认到棋盘。","code-placement"],
["LevelScanShowController","Activates an authored level and enemy root after recognition and exposes its cooldown multiplier.","识别后启用预设关卡和敌人，并提供部署冷却倍率。","code-level-scan"],
["BattleUnit","Handles stats, target search, movement, attacks, damage, death and elemental multipliers.","管理属性、索敌、移动、攻击、受伤、死亡与元素倍率。",null],
["RegionBuff","Applies Fire damage, Water reduction and Wood regeneration inside trigger regions.","在触发区域施加火焰增伤、水域减伤与木属性恢复。",null],
["GameResultManager","Controls timer, win or loss checks, result UI and restart state.","控制计时、胜负判断、结果界面与重开状态。",null],
["Billboard","Keeps world-space health bars and labels facing the AR camera.","让世界空间生命条与名称始终朝向 AR 相机。",null]]
const basePath=new URL('.',document.currentScript.src).pathname;
const asset=src=>basePath+src.replace(/^\/+/, '')
const img=(src,alt)=>'<img loading="lazy" src="'+asset(src)+'" alt="'+alt+'">'
function build(lang){const c=nxCopy[lang],z=lang==="zh",t=(a,b)=>z?b:a
return '<section class="nx" data-lang="'+lang+'">'+
'<div class="nx-hero"><div><span class="nx-eyebrow">'+t('AR · TACTICAL CARDS · AUTO BATTLE','AR · 战术卡牌 · 自动战斗')+'</span><h3>'+c.hero+'</h3><p>'+c.intro+'</p><p class="nx-insight">'+c.insight+'</p><div class="nx-facts"><b>'+t('10×10 GRID','10×10 网格')+'</b><b>'+t('3 ELEMENTS','3 种元素')+'</b><b>'+t('5 LEVELS','5 个关卡')+'</b><b>'+t('AR MOBILE','移动端 AR')+'</b></div></div>'+img("/nexus-cards-poster.webp","NEXUS CARDS AR battlefield")+'</div>'+
'<div class="nx-flow">'+c.flow.map((x,i)=>'<div><span>'+String(i+1).padStart(2,"0")+'</span><b>'+x+'</b></div>').join("")+'</div>'+
title("01",c.foundation)+
'<div class="nx-foundation"><article><em>AUTO BATTLE</em><h4>Teamfight Tactics</h4><p>'+t("Auto-battle structure, tactical positioning and team composition before combat.","参考自动战斗结构、战前站位与队伍构成。")+'</p></article><article><em>CARD DEPLOYMENT</em><h4>Clash Royale</h4><p>'+t("Card-based deployment and readable arena combat, extended into physical AR cards.","参考卡牌部署与清晰竞技场战斗，并延伸到实体 AR 卡牌。")+'</p></article><article><em>ORIGINAL DIRECTION</em><h4>AR + ELEMENTS</h4><p>'+t("A physical-card 10×10 arena with elemental terrain and five authored formations.","结合实体卡牌、元素地形与五组预设阵型的 10×10 战场。")+'</p></article></div>'+
title("02",c.units,c.unitNote)+
'<div class="nx-units">'+units.map(u=>'<article class="nx-unit nx-unit-'+u[0]+'"><div class="nx-unit-images">'+img("/nexus-cards/unit-"+u[0]+".webp",u[1])+img("/nexus-cards/card-"+u[0]+".webp",u[1]+" card")+'</div><span>'+u[2]+'</span><h4>'+u[1]+'</h4><b>'+u[3]+'</b><p>'+t(u[4],u[5])+'</p></article>').join("")+'</div>'+
'<div class="nx-confirm">'+img("/nexus-cards/ui-confirm.webp","AR placement confirmation")+'<div><span>'+t('SCAN → POSITION → CONFIRM','扫描 → 定位 → 确认')+'</span><h4>'+t("The card is both an input device and a spatial anchor.","卡牌既是输入设备，也是空间锚点。")+'</h4><p>'+t("Before confirmation the preview follows the tracked card. After confirmation the unit is re-parented to the battlefield while preserving world scale.","确认前预览跟随追踪卡；确认后单位重新挂载到战场并保持世界缩放。")+'</p></div></div>'+
title("03",c.levels,c.levelNote)+
'<div class="nx-levels">'+levels.map(l=>'<article><div class="nx-level-no">'+t('LEVEL ','关卡 ')+l[0]+'</div><div class="nx-level-pair">'+img("/nexus-cards/level-"+l[0]+"-card.webp","Level "+l[0]+" card")+img("/nexus-cards/level-"+l[0]+"-ar.webp","Level "+l[0]+" AR")+'</div><h4>'+t(l[1],({"Water Terrain":"水域地形","Fire Battlefield":"火焰战场","Forest Ruins":"森林遗迹","Mixed Battlefield":"混合战场","Element Core":"元素核心"})[l[1]])+'</h4><p>'+t(l[2],l[3])+'</p></article>').join("")+'</div>'+
title("04",c.systems)+
'<div class="nx-systems">'+systems.map((s,i)=>'<article><span>'+String(i+1).padStart(2,"0")+'</span><div><h4>'+s[0]+'</h4><p>'+t(s[1],s[2])+'</p></div>'+(s[3]?img("/nexus-cards/"+s[3]+".webp",s[0]+" code"):"")+'</article>').join("")+'</div>'+
'<div class="nx-logic"><span>COMBAT LOOP</span><b>StartGame</b><i>→</i><b>Countdown</b><i>→</i><b>Check Teams</b><i>→</i><b>Victory / Defeat</b><i>→</i><b>Reset</b></div>'+
'<header class="nx-title nx-outcome"><span>05</span><h3>'+c.outcome+'</h3><p>'+c.result+'</p></header></section>'}
function title(n,h,p=""){return '<header class="nx-title"><span>'+n+'</span><h3>'+h+'</h3>'+(p?'<p>'+p+'</p>':"")+'</header>'}
function update(){const modal=document.querySelector(".modal-element");if(!modal)return;const lang=(modal.querySelector(".modal-type")?.textContent||"").includes("策略")?"zh":"en";const old=modal.querySelector(".nx");if(old?.dataset.lang===lang)return;if(old)old.remove();modal.insertAdjacentHTML("beforeend",build(lang))}
new MutationObserver(update).observe(document.body,{childList:true,subtree:true,characterData:true});update();
