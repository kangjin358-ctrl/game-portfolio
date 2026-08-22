(()=>{
const copy={
en:{
solo:"SOLO PROJECT · BOARD GAME & SYSTEM DESIGN",hero:"Build an auction empire on information, confidence and risk.",summary:"Players run rival auction houses in a fiercely competitive market. With limited time and resources, they acquire collectibles, verify authenticity, set estimates and host high-stakes auctions. Every item may hide a secret, and every raised paddle can shift both market value and player alliances.",concept:"A strategy board game combining auction bidding, antique authentication and auction-house management. Players think like merchants, act like auctioneers and outmanoeuvre rivals while navigating forgeries, insider information and price manipulation.",video:"GAMEPLAY VIDEO",watch:"WATCH ON YOUTUBE ↗",
inspiration:"DESIGN INSPIRATION",inspirationText:"The project combines three perspectives on antiques: negotiation and uncertain prices at Shanghai’s Lingshi Road night market, professional valuation and controlled competition at Christie’s, and the suspense and emotional reveals of Chinese cultural-relic authentication programmes.",
loop:"CORE GAMEPLAY",loopText:"Antiques show a visible category, rarity and starting value, but their true quality remains hidden. Players appraise, discuss, bluff and bid, then manage collections and resources before every secret is revealed in final scoring.",
gameplay:"AUCTION FLOW",gameplayText:"Each auction turns incomplete information into a social and financial decision.",
auctioneer:"SET UP THE LOT",auctioneerText:"Players take turns as Auctioneer while remaining eligible to bid. The Auctioneer places an Antique Card and a face-down Quality Card without checking its value, so everyone begins with the same uncertainty.",
appraise:"APPRAISE & BLUFF",appraiseText:"An Appraisal Certificate lets one player secretly inspect the Quality Card. They may tell the truth, conceal the result or bluff to influence confidence and bidding.",
bid:"BID OR PASS",bidText:"Players weigh rarity, starting price, private information, collection goals and opponent behaviour before bidding, raising or passing.",
pawn:"MANAGE RISK",pawnText:"A Pawn Shop Card mortgages one antique for 6 Gold. The item must be redeemed for 6 Gold before final scoring; each player may pawn no more than twice.",
score:"FINAL SCORING",scoreText:"Players reveal Trend Cards, Identity Cards and antique qualities. Quality, sets, trends, identity bonuses, Gold and Reputation combine to determine the winning auction house.",
catalogue:"COLLECTION CATALOGUE",catalogueText:"The catalogue records item stories, categories, visible star ratings, starting prices and set bonuses. It gives everyone the same factual reference while deliberately hiding Quality, Trends, Identities and private appraisal results.",
components:"COMPONENT SYSTEM",componentsText:"All component photography uses one visual frame so the system reads as a coherent family rather than a collection of unrelated assets.",
antiques:"ANTIQUE CARDS",antiquesText:"Twenty-four antiques span Oriental, Scientific, Ancient Civilization and Art collections. Consistent labels, illustrations, star ratings and prices support quick comparison and set planning.",
identities:"IDENTITY CARDS",identitiesText:"Nine private objectives reward different approaches to collections, rarity, Gold and risk. Hidden identities increase replayability and let bidding behaviour become either a clue or a bluff.",
trends:"TREND CARDS",trendsText:"Market effects increase the value of selected collections or reward specific patterns, forcing players to reassess demand instead of following one fixed acquisition path.",
qualities:"QUALITY CARDS",qualitiesText:"Authentic +10, Restored +6, Counterfeit −2 and Replica −10 create a simple reward ladder with meaningful hidden risk.",
currency:"CURRENCY TOKENS",currencyText:"Gold pays for bids and redemptions. Limited funds create a trade-off between securing the current lot and preserving capital for later auctions.",
reputation:"REPUTATION TOKENS",reputationText:"Temporary Auctioneers earn Reputation. Two Reputation can be exchanged for one appraisal opportunity, converting participation into information advantage.",
appraisal:"APPRAISAL CERTIFICATES",appraisalText:"A certificate grants one secret look at a hidden Quality Card. The result stays private, creating asymmetric information and psychological tension.",
pawnCards:"PAWN SHOP CARDS",pawnCardsText:"Pawn cards provide limited emergency liquidity. Immediate bidding power is gained by placing long-term collection value at risk.",
boards:"BOARD & INFORMATION DESIGN",boardsText:"The board system separates shared auction state from each player’s private economy and collection.",
mainBoard:"MAIN GAME BOARD",mainBoardText:"A central collection grid displays available antiques; dedicated Trend and Quality areas separate public market effects from hidden authenticity information.",
playerBoard:"PLAYER BOARD",playerBoardText:"Treasury, Pawn Shop, Collection Hall, Invitation and Artifacts areas keep Gold, mortgaged items, won lots, identity and limited resources consistently organised.",
wireframes:"FROM WIREFRAME TO FINAL BOARD",wireframesText:"Early wireframes tested information hierarchy and card placement before visual production. Fixed zones reduced setup errors and made final scoring easier to read.",
iteration:"PLAYTEST & ITERATION",iterationText:"Two low-fidelity test rounds were used to validate the economy and information systems before investing in final component art.",
v2:"ITERATION 2.0 · FIRST PLAYABLE PROTOTYPE",v2Text:"The first four-player build used 4 antiques, 20 Quality Cards, 15 starting Gold and 2 Appraisal Tickets per player. Hidden appraisal and bluffing worked, but the surrounding game lacked variety and pressure.",
issues:"PLAYTEST ISSUES",issuesList:["Only four antiques made auctions repetitive.","Three Gold awarded every round inflated the economy.","Appraisal Tickets were rarely used.","The Auctioneer role felt procedural rather than strategic."],
v3:"ITERATION 3.0 · SYSTEM EXPANSION",v3Text:"I expanded the antique deck from 4 to 24, introduced Identity objectives and Reputation, and created the Auction Catalogue. The second test added depth but exposed new balance and resource problems.",
feedback:"SECOND PLAYTEST",feedbackList:["Four identities offered too little variety and some objectives were too strong.","Limited appraisal opportunities reduced information-based choices.","Players wanted a clearer timing window for appraisal.","Gold ran out too early, excluding players from later auctions."],
adjust:"FINAL ADJUSTMENTS",adjustList:["Identity Cards increased from 4 to 9.","Starting Gold increased from 15 to 20.","2 Reputation can be exchanged for 1 appraisal.","Pawn Shop Cards create emergency liquidity.","Trend Cards make collection values dynamic.","Starting bids use stars: ★★★ = 1, ★★★★ = 2, ★★★★★ = 3 Gold."],
reflection:"REFLECTION",reflectionText:"The project began as a simple hidden-value auction. Playtesting showed that bluffing only becomes meaningful when money is scarce, information has a cost and players have competing reasons to value the same object. The final system connects auctioneering, reputation, appraisal, collections, market trends and pawning into one decision economy.",
future:"FUTURE PLAN",futureText:"I plan to expand the Identity deck and test a limited-choice draft. Instead of receiving a fully random role, each player would choose from a small hand. Further tests will determine the best number of choices while balancing agency, setup time and strategic variety.",
open:"PUBLIC INFORMATION",hidden:"HIDDEN INFORMATION",quality:"Quality & authenticity",trend:"Current market trend",identity:"Opponent identities",private:"Private appraisal results"
},
zh:{
solo:"个人项目 · 桌游与系统设计",hero:"用信息、信心与风险经营一座拍卖帝国。",summary:"玩家经营彼此竞争的拍卖行，在时间和资源有限的市场中收购藏品、鉴定真伪、设定估价并举办高风险拍卖。每件拍品都可能隐藏秘密，每一次举牌都可能改变市场价值与玩家关系。",concept:"一款融合竞价拍卖、古董鉴定与拍卖行经营的策略桌游。玩家既要像商人一样评估价值，也要像拍卖师一样掌控局面，同时应对赝品、私人信息与价格操纵。",video:"玩法视频",watch:"前往 YOUTUBE 观看 ↗",
inspiration:"设计灵感",inspirationText:"项目结合了三种古董体验：上海灵石路夜市中的议价与不确定价格、Christie’s 的专业估值与受控竞争，以及中国文物鉴定节目中真伪揭晓带来的悬念与情绪反应。",
loop:"核心玩法",loopText:"古董会公开类别、稀有度和起拍价值，但真实品质保持隐藏。玩家进行鉴定、讨论、诈唬与竞价，再管理收藏和资源，直至最终结算时公开所有秘密。",
gameplay:"拍卖流程",gameplayText:"每场拍卖都把不完整信息转化为社交判断与财务决策。",
auctioneer:"设置拍品",auctioneerText:"玩家轮流担任拍卖师，同时仍可参与竞价。拍卖师放置古董卡和背面朝上的品质卡，但不能提前查看，因此所有人从同样的不确定性出发。",
appraise:"鉴定与诈唬",appraiseText:"鉴定证书允许一名玩家秘密查看品质卡。玩家可以说出真相、隐瞒结果或进行诈唬，从而影响其他人的信心与出价。",
bid:"出价或放弃",bidText:"玩家综合星级、起拍价、私人信息、收藏目标与对手行为，决定参与竞价、继续加价或放弃。",
pawn:"管理风险",pawnText:"使用典当卡可抵押一件古董并获得 6 枚金币。玩家需在最终结算前支付 6 金币赎回，每局最多典当两次。",
score:"最终结算",scoreText:"玩家公开趋势卡、身份卡与古董品质。品质、套装、趋势、身份奖励、金币与声望共同决定最成功的拍卖行。",
catalogue:"收藏图鉴",catalogueText:"图鉴记录物品故事、类别、公开星级、起拍价格和套装奖励，为所有玩家提供相同的事实依据，同时刻意隐藏品质、趋势、身份与私人鉴定结果。",
components:"组件系统",componentsText:"所有组件图片使用统一的视觉底板、比例、边框和图注，让整个系统呈现为一致的视觉家族。",
antiques:"古董卡",antiquesText:"24 件古董分为东方、科学、古代文明与艺术四个系列。统一的标签、插图、星级和价格方便快速比较与套装规划。",
identities:"身份卡",identitiesText:"九种私人目标分别奖励收藏、稀有度、金币与风险策略。隐藏身份提升重复可玩性，也让竞价行为既可能是线索，也可能是诈唬。",
trends:"市场趋势卡",trendsText:"市场效果提高特定系列价值或奖励特定组合，迫使玩家持续重新评估需求，而不能始终沿用固定收购路线。",
qualities:"品质卡",qualitiesText:"真品 +10、修复品 +6、仿冒品 −2、复制品 −10，以简单的收益阶梯制造有意义的隐藏风险。",
currency:"金币标记",currencyText:"金币用于竞价与赎回。有限资金迫使玩家在当前拍品和后续拍卖机会之间取舍。",
reputation:"声望标记",reputationText:"临时拍卖师获得声望；2 点声望可兑换一次鉴定机会，将流程参与转化为信息优势。",
appraisal:"鉴定证书",appraisalText:"证书允许玩家秘密查看一张品质卡，结果仅使用者知晓，从而形成非对称信息与心理压力。",
pawnCards:"典当卡",pawnCardsText:"典当卡提供有限的应急资金。玩家以长期收藏价值的风险换取即时竞价能力。",
boards:"面板与信息设计",boardsText:"面板系统将公共拍卖状态与每位玩家的私人经济和收藏清晰分开。",
mainBoard:"主游戏面板",mainBoardText:"中央收藏网格展示可获得的古董；独立的趋势区和品质区将公开市场效果与隐藏真伪信息分开。",
playerBoard:"玩家面板",playerBoardText:"财务区、典当行、收藏大厅、邀请函和道具区分别整理金币、抵押品、拍品、身份与有限资源。",
wireframes:"从线框到最终面板",wireframesText:"早期线框先验证信息层级和卡牌位置，再进入视觉制作。固定区域减少设置错误，也让最终结算更易读取。",
iteration:"试玩与迭代",iterationText:"我通过两轮低保真试玩验证经济与信息系统，再投入最终组件的视觉制作。",
v2:"迭代 2.0 · 第一版可玩原型",v2Text:"第一版四人原型包含 4 张古董、20 张品质卡，每人 15 枚初始金币和 2 张鉴定券。隐藏鉴定与诈唬有效，但外围系统缺少变化和压力。",
issues:"试玩问题",issuesList:["只有四件古董，拍卖很快变得重复。","每轮发放三枚金币导致经济膨胀。","鉴定券很少被使用。","拍卖师更像执行流程，缺少策略参与。"],
v3:"迭代 3.0 · 系统扩展",v3Text:"我将古董从 4 张扩充到 24 张，加入身份目标与声望，并制作拍卖图鉴。第二次试玩提升了深度，同时暴露新的平衡和资源问题。",
feedback:"第二次试玩",feedbackList:["四种身份变化不足，部分目标过强。","鉴定机会过少，限制了信息策略。","玩家希望明确鉴定的使用时机。","金币过早耗尽，使玩家无法参与后续拍卖。"],
adjust:"最终调整",adjustList:["身份卡从 4 张增加到 9 张。","初始金币从 15 增加到 20。","2 点声望可兑换 1 次鉴定。","典当卡提供应急资金。","趋势卡让收藏价值动态变化。","星级统一起拍价：★★★ = 1、★★★★ = 2、★★★★★ = 3 金币。"],
reflection:"反思",reflectionText:"项目最初只是一个隐藏价值拍卖游戏。试玩让我认识到：只有当金钱稀缺、信息具有成本，而且玩家对同一物品拥有相互竞争的估值理由时，诈唬才真正有意义。最终系统把拍卖师、声望、鉴定、收藏、市场趋势与典当连接成同一个决策经济。",
future:"未来计划",futureText:"我计划扩充身份卡，并测试有限选择的身份抽取方式。玩家不再接受完全随机的角色，而是从少量身份中选择。后续试玩将确定合适的可选数量，在自主性、设置时间与策略变化之间取得平衡。",
open:"公开信息",hidden:"隐藏信息",quality:"品质与真伪",trend:"当前市场趋势",identity:"对手身份",private:"私人鉴定结果"
}}
const basePath=new URL('.',document.currentScript.src).pathname;
const path=n=>`${basePath}hammer/${n}`
const media=(file,alt,cls="")=>`<figure class="hm-media ${cls}"><img loading="lazy" src="${path(file)}" alt="${alt}"></figure>`
const title=(n,h,p="")=>`<header class="hm-title"><span>${n}</span><h3>${h}</h3>${p?`<p>${p}</p>`:""}</header>`
const card=(h,p,file)=>`<article class="hm-component">${media(file,h)}<div><h4>${h}</h4><p>${p}</p></div></article>`
const list=items=>`<ul class="hm-list">${items.map(x=>`<li>${x}</li>`).join("")}</ul>`
function build(lang){const c=copy[lang];return `<section class="hm" data-lang="${lang}">
<section class="hm-hero"><div><span>${c.solo}</span><h3>${c.hero}</h3><p>${c.summary}</p><p class="hm-concept">${c.concept}</p><div class="hm-facts"><b>3–4 PLAYERS</b><b>24 ANTIQUES</b><b>9 IDENTITIES</b><b>2026</b></div></div>${media("antique-board.png","Time Collector antique collection")}</section>
<section class="hm-video"><span>${c.video}</span><div class="hm-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/-ZYleaork3k" title="Time Collector gameplay video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><a href="https://youtu.be/-ZYleaork3k" target="_blank" rel="noreferrer">${c.watch}</a></section>
${title("01",c.inspiration,c.inspirationText)}${media("inspiration.png",c.inspiration,"wide")}
${title("02",c.loop,c.loopText)}<div class="hm-loop">${[c.appraise,c.gameplay,c.components,c.score].map((x,i)=>`<div><span>0${i+1}</span><b>${x}</b></div>`).join("")}</div>${media("game-flow.png",c.loop,"flow")}
${title("03",c.gameplay,c.gameplayText)}<div class="hm-steps">${card(c.auctioneer,c.auctioneerText,"auctioneer.png")}${card(c.appraise,c.appraiseText,"appraisal-play.png")}${card(c.bid,c.bidText,"bid-pass.png")}${card(c.pawn,c.pawnText,"pawn-play.png")}</div>${card(c.score,c.scoreText,"final-scoring.png")}
${title("04",c.catalogue,c.catalogueText)}${media("catalogue-spread.png",c.catalogue,"wide")}<div class="hm-info"><div><b>${c.open}</b><span>Names · Categories · Stars · Starting prices · Set bonuses</span></div><div><b>${c.hidden}</b><span>${c.quality} · ${c.trend} · ${c.identity} · ${c.private}</span></div></div>
${title("05",c.components,c.componentsText)}<div class="hm-components">${card(c.antiques,c.antiquesText,"antiques-grid.png")}${card(c.identities,c.identitiesText,"identities-grid.png")}${card(c.trends,c.trendsText,"trends.png")}${card(c.qualities,c.qualitiesText,"qualities.png")}${card(c.currency,c.currencyText,"currency.png")}${card(c.reputation,c.reputationText,"reputation.png")}${card(c.appraisal,c.appraisalText,"appraisal-card.png")}${card(c.pawnCards,c.pawnCardsText,"pawn-card.png")}</div>
${title("06",c.boards,c.boardsText)}<div class="hm-board-grid">${card(c.mainBoard,c.mainBoardText,"main-board.png")}${card(c.playerBoard,c.playerBoardText,"player-board.png")}</div><h4 class="hm-subtitle">${c.wireframes}</h4><p class="hm-copy">${c.wireframesText}</p><div class="hm-wireframes">${media("wire-main.png","Main board wireframe")}${media("wire-player.png","Player board wireframe")}${media("wire-card.png","Antique card wireframe")}</div>
${title("07",c.iteration,c.iterationText)}<section class="hm-iteration"><span>${c.v2}</span><p>${c.v2Text}</p><div class="hm-playtest">${media("playtest-1a.png","First paper playtest")}${media("playtest-1b.png","First paper playtest")}</div><div class="hm-findings"><h4>${c.issues}</h4>${list(c.issuesList)}</div></section>
<section class="hm-iteration"><span>${c.v3}</span><p>${c.v3Text}</p><div class="hm-playtest four">${["playtest-2a.png","playtest-2b.png","playtest-2c.png","playtest-2d.png"].map(x=>media(x,"Second paper playtest")).join("")}</div><div class="hm-findings"><h4>${c.feedback}</h4>${list(c.feedbackList)}</div><div class="hm-adjust"><h4>${c.adjust}</h4>${list(c.adjustList)}</div>${media("playtest-developed.png","Developed Time Collector prototype","wide")}</section>
${title("08",c.reflection)}<div class="hm-ending"><p>${c.reflectionText}</p><div><span>${c.future}</span><p>${c.futureText}</p></div></div>
</section>`}
function update(){const modal=document.querySelector(".modal-hammer");if(!modal)return;const lang=(modal.querySelector(".modal-type")?.textContent||"").includes("桌游")?"zh":"en";const old=modal.querySelector(".hm");if(old?.dataset.lang===lang)return;old?.remove();modal.insertAdjacentHTML("beforeend",build(lang))}
new MutationObserver(update).observe(document.body,{childList:true,subtree:true,characterData:true});update()
})();
