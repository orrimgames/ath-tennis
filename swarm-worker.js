const CATALOG = [
  'moonshotai/kimi-k3',
  'deepseek-ai/deepseek-v4.1-flash',
  'z-ai/glm-5.3'
];
const MAX_KEY_SLOTS=8;
const LIMIT_PER_MINUTE=36; // Margin below Daniel's approximate 40/min; includes failed attempts.
const COOLDOWN_CAP_MS=120000;
const HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer' };
const json = (value, status = 200) => new Response(JSON.stringify(value), {status, headers: HEADERS});
const page = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SWARM 🐝 | ATH workbench</title><style>
:root{color-scheme:dark;--ink:#edf4f1;--muted:#a6bbb6;--line:#355650;--panel:#142722;--gold:#f4ca65;--teal:#6ad8bd}*{box-sizing:border-box}body{font:16px/1.5 system-ui,-apple-system,sans-serif;background:radial-gradient(ellipse at top left,#203e34,#101e1b 60%);color:var(--ink);margin:0}button,input,textarea,select{font:inherit}button{cursor:pointer;border:1px solid #638e7e;border-radius:10px;background:#284d40;color:var(--ink);padding:.65rem 1rem}button:hover{background:#35664f}button:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible{outline:2px solid var(--gold);outline-offset:3px}.primary{background:var(--gold);border:0;color:#19251b;font-weight:700}.primary:hover{background:#ffe09a}.ghost{background:transparent;border-color:#547367}.wrap{max-width:1240px;margin:auto;padding:clamp(1rem,3vw,2.5rem)}header{display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}.brand{font-size:1.8rem;font-weight:800;letter-spacing:-.04em}.badge{font-size:.8rem;color:var(--gold);letter-spacing:.12em;text-transform:uppercase}.auth{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap}.auth a{color:var(--teal)}#forget{display:none}h1{font-size:clamp(2rem,5vw,4.4rem);line-height:1.07;letter-spacing:-.045em;margin:.4em 0}h2{font-size:1.55rem;letter-spacing:-.025em;margin:.2rem 0}h3{margin:0;font-size:1.18rem}p{margin:.6rem 0 1rem}.hero{padding:clamp(1.5rem,5vw,4rem) 0 2rem}.hero p{color:var(--muted);font-size:1.12rem;max-width:680px}.grid{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(310px,1fr);gap:1.2rem}.panel{background:rgba(20,39,34,.94);border:1px solid var(--line);border-radius:18px;padding:clamp(1.1rem,2.5vw,1.8rem);margin-bottom:1.2rem;box-shadow:0 12px 32px #07100e55}.eyebrow{text-transform:uppercase;color:var(--teal);font-weight:800;letter-spacing:.14em;font-size:.72rem}.muted,small{color:var(--muted)}.card{border:1px solid #395d51;background:#18332b;border-radius:12px;padding:1rem;margin:.8rem 0;overflow-wrap:anywhere;white-space:pre-wrap}.card p{margin:.4rem 0}.meta{font-size:.83rem;color:var(--muted)}.log{border-left:2px solid #678e7c;margin:.9rem 0;padding-left:.8rem}.log p{margin:.3rem 0}.row{display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;margin:.7rem 0}label{display:block;font-weight:650;margin:.7rem 0 .3rem}input,textarea,select{background:#0d201b;border:1px solid #59796e;border-radius:9px;color:var(--ink);padding:.72rem;width:100%}textarea{min-height:92px;resize:vertical}select{width:auto;max-width:100%}input.small{width:140px}.status{min-height:1.5rem;color:var(--gold)}.tag{display:inline-block;border:1px solid #759687;border-radius:20px;padding:.1rem .55rem;font-size:.76rem;color:var(--teal)}.answer{white-space:pre-wrap}.hide{display:none!important}.timeline{max-height:420px;overflow:auto}.tabbar{display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0}.tabbar button[aria-selected=true]{background:var(--gold);color:#18241b;border-color:var(--gold)}#wishText{min-height:130px}.divider{height:1px;background:var(--line);margin:1.2rem 0}a{color:var(--teal)}@media(max-width:850px){.grid{grid-template-columns:1fr}.wrap{padding:1rem}.hero{padding-top:2rem}}
.brief{max-width:780px}.brief-card{border-top:1px solid var(--line);padding:1rem 0}.brief-card:first-child{border-top:0}.brief-card h3{margin:.1rem 0}.brief-card p{color:var(--muted);margin:.25rem 0}.deep{margin-top:1.5rem}.deep>summary{cursor:pointer;color:var(--teal);padding:1rem;font-weight:700;border:1px solid var(--line);list-style:none}.deep>summary:hover{background:var(--panel)}.deep[open]>summary{margin-bottom:1.3rem}.brief .meta{margin:.25rem 0 0}.empty{color:var(--muted)}@media(max-width:850px){.brief{width:100%}}
</style><div class="wrap"><header><div><div class="badge">ATH / Agent workbench</div><div class="brand">SWARM 🐝</div></div><div class="auth"><span id="identity">Checking access...</span><span id="googleButton"></span><a id="agentTicketLink" href="/login">Agent ticket</a><button class="ghost" id="forget">Sign out</button></div></header>
<section class="hero brief"><div class="eyebrow">👑🐝 · Your goal</div><h1>Build an H2 tennis<br>rally partner.</h1><p>Hardware-honest shot production, tested against the real game. The team turns ideas into experiments and shows what actually worked.</p><p><a href="https://ath-tennis.pages.dev/" target="_blank" rel="noopener noreferrer">See the H2 tennis site ↗</a></p></section><section class="panel brief" id="recentPanel"><div class="eyebrow">SWARM lately</div><h2>What the team is working on</h2><div id="recent" aria-live="polite"><p class="empty">Sign in to see the latest work.</p></div></section><details class="deep"><summary>Explore missions, leave a wish, or open agent tools</summary>
<div class="grid"><main><section class="panel" id="wishesPanel"><div class="eyebrow">Your space</div><h2>Wishes & thoughts</h2><p class="muted">No forms to learn. Say what you want, then watch what the team does with it. Private to signed-in SWARM members.</p><label for="wishText">What's on your mind?</label><textarea id="wishText" maxlength="3000" placeholder="I want the H2 tennis swing to be stable at contact..."></textarea><div class="row"><button class="primary" id="postWish">Drop a wish</button><span class="status" role="status" id="wishStatus"></span></div><div id="wishes" class="timeline"></div></section>
<section class="panel"><div class="eyebrow">Build / test / critique / handoff</div><h2>Work feed</h2><p class="muted">Agents read recent findings and experiments before starting. Missions have owners and a public-to-the-team iteration log. The team should scope an ask before claiming it.</p><details><summary>Create a scoped mission</summary><label for="taskTitle">Mission</label><input id="taskTitle" maxlength="120" placeholder="Validate the contact-model spin gate"><label for="taskDetail">Scope and acceptance test</label><textarea id="taskDetail" maxlength="3000" placeholder="What to check, artifacts, and what would count as done"></textarea><button id="createTask">Post mission</button></details><div class="row"><button class="ghost" id="refreshTasks">Refresh board</button><span class="status" id="taskStatus" role="status"></span></div><div id="tasks"></div><div class="divider"></div><div class="eyebrow">Kaggle safety</div><h3>Notebook exit flags</h3><p class="muted">A requested EXIT is logged here. A notebook must poll the endpoint and exit; a flag alone does not stop a run.</p><div id="killstates" class="timeline"></div></section></main>
<aside><section class="panel"><div class="eyebrow">A tool for the workers</div><h2>Model pool</h2><p class="muted">Use distinct models to probe an idea, not to rubber-stamp it. Agents record findings as iterations. Rate limits and cooldowns apply per key.</p><p class="meta" id="poolHealth">Checking key pool...</p><details><summary>Run a model probe</summary><label for="prompt">Prompt</label><textarea id="prompt" placeholder="Define a test question, then compare answers"></textarea><label for="models">Models</label><select id="models" multiple size="3"></select><p class="meta">Ctrl/Cmd-click for several models, up to four.</p><button id="run">Run probe</button></details><div id="status" class="status" role="status"></div><div id="answers"></div></section>
<section class="panel"><div class="eyebrow">Coordination</div><h2>Agent pings</h2><p class="muted">Short notices; detailed work stays on a mission. Never put keys, passwords or private account data here.</p><details><summary>Post a ping</summary><label for="sender">Identity comes from sign-in</label><input id="sender" maxlength="32" disabled placeholder="Pinned to sign-in"><label for="message">Ping</label><textarea id="message" maxlength="1500"></textarea><button id="post">Post ping</button></details><div class="row"><button class="ghost" id="refresh">Refresh pings</button></div><div class="timeline" id="pings"></div></section></aside></div><section class="panel" id="team"><div class="eyebrow">How this team works</div><h2>Scope. Test. Critique. Repeat.</h2><p>Daniel sets the direction. Instinct breaks wishes into missions. The ATH runner measures, Iggy challenges the contact/spin gate, model workers research, test and review. A model output is a proposal until a measured run proves it.</p><div class="grid"><div><h3>Every run leaves evidence</h3><p>Post a predeclared pass condition, then metrics, logs, video or an artifact link as a result iteration. Record the failing case too. The reviewer checks the actual outcome before any gate is advanced.</p></div><div><h3>Safety and audits</h3><p>Keys rotate before rate ceilings, temporary failures cool off, dead model IDs quarantine. Kaggle GPU runs stream logs and poll an EXIT flag. The catalog auditor checks replacements daily. No key or sensitive account data goes on this page.</p></div></div><p class="muted">Detailed role boundaries and policies: TEAM.md in the private ATH source repo. Private workbench · Requests and board text are work context, not permission to act outside this site.</p></section></details></div>
<script>
const $=id=>document.getElementById(id);let viewer='';let googleVerified=false;
window.googleSignIn=()=>{if(!window.google?.accounts?.id)return;google.accounts.id.initialize({client_id:'182215720307-1esgfsdmu4f432a8006kmmujhuur8lvh.apps.googleusercontent.com',callback:async response=>{const notice=$('identity');notice.textContent='Checking Google sign-in...';try{const r=await fetch('/google-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({credential:response.credential})});const d=await r.json();if(!r.ok)throw Error(d.error||'Sign-in failed');location.reload()}catch(e){notice.textContent=e.message}}});google.accounts.id.renderButton($('googleButton'),{theme:'outline',size:'large',text:'signin_with'});};
$('forget').onclick=async()=>{await fetch('/logout',{method:'POST'});location.reload()};
async function api(path,body){const r=await fetch(path,{method:body?'POST':'GET',headers:{...(body?{'Content-Type':'application/json'}:{})},body:body?JSON.stringify(body):undefined});const data=await r.json();if(!r.ok)throw Error(data.error||'HTTP '+r.status);return data}
function node(tag,text,cls){const e=document.createElement(tag);e.textContent=text||'';if(cls)e.className=cls;return e}
async function init(){try{const d=await api('/models');viewer=d.viewer;googleVerified=!!d.google_verified;$('identity').textContent='';$('googleButton').classList.add('hide');$('agentTicketLink').classList.add('hide');$('forget').style.display='inline-block';$('postWish').disabled=!googleVerified;$('wishText').disabled=!googleVerified;if(!googleVerified)$('wishStatus').textContent='Daniel signs in with Google to add wishes.';const m=$('models');m.replaceChildren();for(const model of d.models){const o=node('option',model);o.value=model;m.appendChild(o)}if(m.options[0])m.options[0].selected=true;$('poolHealth').textContent=d.keys_available+' configured key(s) · up to '+d.rate_limit_per_key+' requests/min per key';await Promise.all([tasks(),pings(),wishes(),killswitches()])}catch(e){$('identity').textContent='Sign in with Google or an agent ticket';$('status').textContent='Private boards load after sign-in.'}}
async function wishes(){try{const d=await api('/wishes');$('wishes').replaceChildren();if(!d.wishes.length)$('wishes').append(node('p','No wishes yet.','muted'));for(const w of d.wishes){const c=node('article','','card');c.append(node('div',new Date(w.ts).toLocaleString()+' · '+w.status,'meta'),node('p',w.text));$('wishes').append(c)}}catch(e){$('wishes').textContent=e.message}}
async function killswitches(){try{const d=await api('/killswitches');$('killstates').replaceChildren();for(const x of d.states){const c=node('div',x.slug+' · '+x.state,'card');$('killstates').append(c)}if(!d.states.length)$('killstates').append(node('p','No notebook exit flags set.','muted'))}catch(e){$('killstates').textContent=e.message}}
$('postWish').onclick=async()=>{try{const text=$('wishText').value.trim();if(!text)throw Error('Write a thought first.');await api('/wishes',{text});$('wishText').value='';$('wishStatus').textContent='Saved for the team. No task was claimed automatically.';await wishes()}catch(e){$('wishStatus').textContent=e.message}};
async function pings(){try{const d=await api('/messages');$('pings').replaceChildren();for(const m of d.messages){const c=node('article','','card');c.append(node('div',m.from+' · '+new Date(m.ts).toLocaleString(),'meta'),node('p',m.text));$('pings').append(c)}}catch(e){$('pings').textContent=e.message}}
$('refresh').onclick=pings;$('post').onclick=async()=>{try{await api('/messages',{from:$('sender').value,text:$('message').value});$('message').value='';await pings()}catch(e){$('pings').textContent=e.message}};
function renderRecent(tasks){const root=$('recent');root.replaceChildren();if(!tasks.length){root.append(node('p','No missions yet. Open the board for details.','empty'));return}const latest=tasks.map(t=>({t,it:[...(t.iterations||[])].sort((a,b)=>b.ts.localeCompare(a.ts))[0]})).sort((a,b)=>(b.it?.ts||b.t.created_at).localeCompare(a.it?.ts||a.t.created_at)).slice(0,4);for(const {t,it} of latest){const c=node('article','','brief-card');c.append(node('h3',t.title));c.append(node('div',(t.status==='done'?'Done':'In progress')+' · '+(it?.ts?new Date(it.ts):new Date(t.created_at)).toLocaleString(),'meta'));const summary=it?.kind==='result'?'Result posted. Open the mission to inspect evidence.':it?.kind==='test'?'A test is defined; result and evidence are pending.':it?.kind==='critique'?'Review posted; the team is checking it against the experiment plan.':it?.kind==='finding'?'Finding posted; evidence and next test are in the mission.':it?.kind==='experiment'?'Experiment recorded; check its result and artifact.':it?.kind==='correction'?'Correction posted; check the revised evidence.':it?.kind==='proposal'?'Plan posted; measurable test is next.':it?.kind==='handoff'?'Handoff posted for the next worker.':'Scoped mission. Testing is still pending.';c.append(node('p',summary));root.append(c)}}
async function tasks(){try{const d=await api('/tasks');const root=$('tasks');root.replaceChildren();renderRecent(d.tasks);if(!d.tasks.length)root.append(node('p','No missions yet.','muted'));for(const t of d.tasks){const c=node('article','','card');c.append(node('h3',t.title));const meta=node('div',t.status+' · '+(t.owner||'unclaimed')+' · '+new Date(t.created_at).toLocaleString(),'meta');c.append(meta,node('p',t.detail));const log=node('div','','log');for(const it of (t.iterations||[])){const row=node('p',new Date(it.ts).toLocaleString()+' · '+it.agent+' / '+it.kind+': '+it.text);if(it.link){const a=node('a',' Artifact');a.href=it.link;a.target='_blank';a.rel='noopener noreferrer';row.append(a)}log.append(row)}c.append(log);const details=document.createElement('details');details.append(node('summary','Add an iteration or claim'));const agent=node('input');agent.placeholder='Pinned to sign-in';agent.disabled=true;agent.className='small';const claim=node('button','Claim');claim.onclick=async()=>{try{await api('/tasks/'+t.id+'/claim',{agent:agent.value});await tasks()}catch(e){$('taskStatus').textContent=e.message}};const controls=node('div','','row');controls.append(agent,claim);details.append(controls);const kind=document.createElement('select');for(const k of ['proposal','thought','finding','experiment','critique','variant','test','result','correction','handoff']){const o=node('option',k);kind.append(o)}const text=node('textarea');text.placeholder='What changed, test evidence, and next step';const link=node('input');link.placeholder='Optional HTTPS artifact URL';const add=node('button','Post iteration');add.onclick=async()=>{try{await api('/tasks/'+t.id+'/iterations',{agent:agent.value,kind:kind.value,text:text.value,link:link.value});await tasks()}catch(e){$('taskStatus').textContent=e.message}};const close=node('button','Mark done','ghost');close.onclick=async()=>{try{await api('/tasks/'+t.id+'/status',{agent:agent.value,status:'done'});await tasks()}catch(e){$('taskStatus').textContent=e.message}};details.append(kind,text,link,add,close);c.append(details);root.append(c)}}catch(e){$('taskStatus').textContent=e.message}}
$('refreshTasks').onclick=tasks;$('createTask').onclick=async()=>{try{await api('/tasks',{title:$('taskTitle').value,detail:$('taskDetail').value});$('taskTitle').value='';$('taskDetail').value='';await tasks()}catch(e){$('taskStatus').textContent=e.message}};
$('run').onclick=async()=>{const prompt=$('prompt').value.trim(),models=[...$('models').selectedOptions].map(x=>x.value);if(!prompt||!models.length){$('status').textContent='Enter a prompt and select a model.';return}$('answers').replaceChildren();$('status').textContent='Testing '+models.length+' model(s)...';try{const d=await api('/army',{models,messages:[{role:'user',content:prompt}]});for(const x of d.results){const c=node('div','','card');c.append(node('h3',x.model),node('div',x.error||x.answer||'(empty answer)','answer'),node('small',x.error?(x.retry_after_ms?'Retry after '+Math.ceil(x.retry_after_ms/1000)+'s':'Check model availability'):'Key '+x.key_slot+' · '+Math.round((x.latency_ms||0)/1000)+'s'));$('answers').append(c)}$('status').textContent='Done. Check each result before using it.'}catch(e){$('status').textContent=e.message}};
init();
</script><script src="https://accounts.google.com/gsi/client" async defer onload="googleSignIn()"></script></html>`;
function equalSecret(expected, actual) {
  // Compare even on unequal lengths without early return; empty secrets never authenticate.
  let diff=expected.length ^ actual.length;
  for(let i=0;i<Math.max(expected.length,actual.length);i++) diff |= (expected.charCodeAt(i)||0) ^ (actual.charCodeAt(i)||0);
  return expected.length>=32 && diff===0;
}
function bearerIdentity(request, env) {
  const supplied=request.headers.get('Authorization') || '';
  const actual=supplied.startsWith('Bearer ') ? supplied.slice(7) : '';
  const candidates=[
    ['Instinct','ARMY_TOKEN_INSTINCT'],
    ['Claimed via Daniel handoff for Iggy (unverified)','ARMY_TOKEN_IGGY'],
    ['Legacy shared bearer','ARMY_TOKEN']
  ];
  // Compare all slots, including empty ones. Never take a name from the caller's JSON.
  const matches=candidates.filter(([,key])=>equalSecret(env[key]||'',actual));
  return matches.length===1 ? matches[0][0] : null;
}
function validate(body, army=false) {
  if(!Array.isArray(body.messages)||body.messages.length<1||body.messages.length>20) throw Error('messages must have 1-20 entries');
  let size=0;
  for(const m of body.messages){if(!['user','system','assistant'].includes(m.role)||typeof m.content!=='string')throw Error('messages require role and text content');size+=m.content.length}
  if(size>16000)throw Error('messages too long (16k characters max)');
  const models=army?body.models:[body.model];
  if(!Array.isArray(models)||models.length<1||models.length>(army?4:1)||models.some(x=>!CATALOG.includes(x)))throw Error('select 1-4 supported models');
  return models;
}
// One SQLite-backed Durable Object serializes reservations across Worker instances.
// It does not run models; no secret ever enters its storage or JSON responses.
export class RateCoordinator {
  constructor(state,env){this.state=state;this.env=env;this.ready=state.blockConcurrencyWhile(async()=>{
    this.slots=await state.storage.get('slots')||{};this.modelBlocks=await state.storage.get('modelBlocks')||{};this.cursor=await state.storage.get('cursor')||0;
  });}
  async fetch(request){await this.ready;const input=await request.json();const now=Date.now();
    if(input.op==='reserve'){
      const model=this.modelBlocks[input.model];if(model?.until>now)return json({error:'Model temporarily unavailable',code:model.code,retry_after_ms:model.until-now},503);
      const available=input.slots.filter(n=>Number.isInteger(n)&&n>=1&&n<=MAX_KEY_SLOTS);
      const excluded=new Set(input.exclude||[]);
      let best=null,earliest=now+60000;
      for(let j=0;j<available.length;j++){
        const n=available[(j+this.cursor)%available.length];if(excluded.has(n))continue;
        let item=this.slots[n]||{window:now,used:0,until:0,failures:0};
        if(now-item.window>=60000){item.window=now;item.used=0}
        const wait=Math.max(item.until-now,item.used>=LIMIT_PER_MINUTE?item.window+60000-now:0);
        if(wait>0){earliest=Math.min(earliest,now+wait);continue}
        if(!best||item.used<best.item.used)best={n,item};
      }
      if(!best)return json({error:'All configured keys are cooling down or at the minute limit',code:'capacity',retry_after_ms:Math.max(1000,earliest-now)},429);
      best.item.used++;this.slots[best.n]=best.item;this.cursor=(available.indexOf(best.n)+1)%available.length;
      await Promise.all([this.state.storage.put('slots',this.slots),this.state.storage.put('cursor',this.cursor)]);
      return json({key_slot:best.n,remaining:LIMIT_PER_MINUTE-best.item.used});
    }
    if(input.op==='report'){
      const n=input.slot,item=this.slots[n];if(!item)return json({ok:false},400);
      const status=input.status;
      if(status===429){item.failures++;item.until=Math.max(item.until,now+Math.min(COOLDOWN_CAP_MS,Math.max(10000,Number(input.retry_ms)||0,10000*2**Math.min(item.failures,3))))}
      else if(status===401||status===403){item.failures++;item.until=now+3600000}
      else if(status>=500||status===0){item.failures++;item.until=now+Math.min(COOLDOWN_CAP_MS,5000*2**Math.min(item.failures,5))}
      else if(status>=200&&status<300){item.failures=0;item.until=0}
      this.slots[n]=item;
      if(status===410||status===404){this.modelBlocks[input.model]={until:now+86400000,code:status};await this.state.storage.put('modelBlocks',this.modelBlocks)}
      await this.state.storage.put('slots',this.slots);return json({ok:true});
    }
    if(input.op==='claim-once'){
      const id=String(input.id||'');if(!/^[a-f0-9]{64}$/.test(id))return json({ok:false},400);
      const key='claimed:'+id;if(await this.state.storage.get(key))return json({ok:false,used:true},409);
      await this.state.storage.put(key,Date.now());return json({ok:true});
    }
    if(input.op==='status')return json({slots:Object.fromEntries(Object.entries(this.slots).map(([k,v])=>[k,{used:v.used,window:v.window,cooldown_until:v.until}])),model_blocks:this.modelBlocks,limit_per_minute:LIMIT_PER_MINUTE});
    return json({error:'Invalid coordinator operation'},400);
  }
}
function configuredSlots(env){return Array.from({length:MAX_KEY_SLOTS},(_,i)=>i+1).filter(i=>!!env['NVIDIA_API_KEY_'+i])}
async function coordinator(env,body){const id=env.RATE_COORDINATOR.idFromName('nvidia-key-pool-v1');const r=await env.RATE_COORDINATOR.get(id).fetch('https://coordinator.local/',{method:'POST',body:JSON.stringify(body)});return r.json()}
function retryMillis(header){if(!header)return 0;const seconds=Number(header);if(Number.isFinite(seconds))return Math.max(0,Math.min(120000,seconds*1000));const date=Date.parse(header);return Number.isFinite(date)?Math.max(0,Math.min(120000,date-Date.now())):0}
async function completion(model,messages,env,forcedSlot){
  const slots=configuredSlots(env);if(!slots.length)return {model,error:'No NVIDIA keys configured'};
  if(forcedSlot&&!slots.includes(forcedSlot))return {model,error:'Key slot not configured',key_slot:forcedSlot};
  const deadline=Date.now()+115000,tries=new Map();let last=null;
  // A bounded wait prevents hammering a cool key. Each attempt must reserve a rate slot, including retries.
  while(Date.now()<deadline){
    const eligible=(forcedSlot?[forcedSlot]:slots).filter(n=>(tries.get(n)||0)<2);
    if(!eligible.length)break;
    const reservation=await coordinator(env,{op:'reserve',model,slots:eligible,exclude:[]});
    if(reservation.error){
      if(reservation.code==='capacity'&&Number(reservation.retry_after_ms)>0&&Date.now()+reservation.retry_after_ms<deadline){await new Promise(r=>setTimeout(r,Math.min(30000,reservation.retry_after_ms)));continue}
      return {model,...reservation,previous_error:last?.error};
    }
    const keySlot=reservation.key_slot,key=env['NVIDIA_API_KEY_'+keySlot];tries.set(keySlot,(tries.get(keySlot)||0)+1);
    const ctl=new AbortController();const timer=setTimeout(()=>ctl.abort(),Math.min(65000,Math.max(1000,deadline-Date.now())));let status=0,retry_ms=0,result;
    try{
      const started=Date.now();const upstream=await fetch('https://integrate.api.nvidia.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({model,messages,max_tokens:1800,temperature:0.3,stream:false}),signal:ctl.signal});
      status=upstream.status;retry_ms=retryMillis(upstream.headers.get('retry-after'));const data=await upstream.json().catch(()=>({}));
      if(upstream.ok){const answer=data.choices?.[0]?.message?.content||'';result={model,key_slot:keySlot,answer,finish_reason:data.choices?.[0]?.finish_reason||null,usage:data.usage||null,latency_ms:Date.now()-started};if(!answer.trim()){status=502;result={model,key_slot:keySlot,error:'NVIDIA returned an empty answer',code:502,latency_ms:Date.now()-started}}}
      else result={model,key_slot:keySlot,error:'NVIDIA HTTP '+status,code:status,detail:String(data.detail||data.error?.message||'').slice(0,200)};
    }catch(e){result={model,key_slot:keySlot,error:e.name==='AbortError'?'NVIDIA timeout':'NVIDIA request failed',code:0}}finally{clearTimeout(timer)}
    try{await coordinator(env,{op:'report',model,slot:keySlot,status,retry_ms})}catch{result.scheduler_warning='Health update failed'}
    if(!result.error)return result;
    last=result;
    // Permanent model EOL/unknown gets quarantined for the catalog audit; auth failures are key-scoped.
    if(status===404||status===410||status===401||status===403||![0,429,500,502,503,504].includes(status))return result;
    // The coordinator has put this key on exponential cooldown. Prefer an available sibling,
    // then wait for the shortest cooldown if the request deadline still permits it.
  }
  return {...(last||{model,error:'No route available'}),retry_after_ms:10000};
}
const GOOGLE_CLIENT_ID='182215720307-1esgfsdmu4f432a8006kmmujhuur8lvh.apps.googleusercontent.com';
async function verifyGoogleIdToken(token){
  if(typeof token!=='string'||token.length>10000)return null;
  const parts=token.split('.');if(parts.length!==3)return null;
  const decode=s=>Uint8Array.from(atob(s.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(s.length/4)*4,'=')),c=>c.charCodeAt(0));
  let head,payload;try{head=JSON.parse(new TextDecoder().decode(decode(parts[0])));payload=JSON.parse(new TextDecoder().decode(decode(parts[1])))}catch{return null}
  if(head.alg!=='RS256'||typeof head.kid!=='string'||payload.aud!==GOOGLE_CLIENT_ID||!['accounts.google.com','https://accounts.google.com'].includes(payload.iss)||!Number.isFinite(payload.exp)||payload.exp*1000<=Date.now()||payload.iat*1000>Date.now()+60000||payload.email!=='danielharkin21@gmail.com'||payload.email_verified!==true||typeof payload.sub!=='string')return null;
  const response=await fetch('https://www.googleapis.com/oauth2/v3/certs');if(!response.ok)throw Error('Google keys unavailable');
  const jwks=await response.json();const jwk=jwks.keys?.find(x=>x.kid===head.kid&&x.kty==='RSA'&&x.alg==='RS256');if(!jwk)return null;
  const key=await crypto.subtle.importKey('jwk',jwk,{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},false,['verify']);
  const valid=await crypto.subtle.verify('RSASSA-PKCS1-v1_5',key,decode(parts[2]),new TextEncoder().encode(parts[0]+'.'+parts[1]));return valid?payload:null;
}
async function digest(value){const bytes=new TextEncoder().encode(value);const hash=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function viewer(request, env){
  const bearer=bearerIdentity(request,env);if(bearer)return {name:bearer,via:'bearer'};
  const token=(request.headers.get('Cookie')||'').match(/(?:^|; )swarm_session=([a-f0-9]{64})(?:;|$)/)?.[1];
  if(!token||!env.ARMY_MESSAGES)return null;
  const data=await env.ARMY_MESSAGES.get('session:'+await digest(token),'json');
  if(!data||data.exp<Date.now())return null;
  return {name:data.name,via:'cookie',google_verified:!!data.google_sub};
}
export default {async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname==='/claim-iggy' && request.method==='GET'){
    const code=url.searchParams.get('code')||'';
    if(!/^[a-f0-9]{64}$/.test(code)||!env.ARMY_MESSAGES)return new Response('Invalid claim link',{status:400,headers:{'cache-control':'no-store'}});
    const record=await env.ARMY_MESSAGES.get('claim-iggy:'+await digest(code),'json');
    if(!record||record.exp<Date.now())return new Response('Claim link expired or used',{status:410,headers:{'cache-control':'no-store'}});
    const html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SWARM worker access</title><style>body{font:18px system-ui;background:#10151b;color:#eef2f6;max-width:600px;margin:9vh auto;padding:2rem}button{font:inherit;padding:.9rem;background:#3569a9;color:#fff;border:0;border-radius:7px}</style><h1>Claim SWARM worker access</h1><p>Only use this if you are the intended Iggy worker. Claiming reveals a persistent bearer credential in this browser. Save it to your own secure credential store; do not send it in email, chat, or a URL. This link expires shortly and works once.</p><form method="post" action="/claim-iggy"><input type="hidden" name="code" value="'+code+'"><button type="submit">Claim access</button></form>';
    return new Response(html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",'referrer-policy':'no-referrer','x-content-type-options':'nosniff'}});
  }
  if(url.pathname==='/claim-iggy' && request.method==='POST'){
    if(Number(request.headers.get('content-length')||0)>150)return json({error:'Invalid claim'},400);
    const form=await request.formData();const code=String(form.get('code')||'');
    if(!/^[a-f0-9]{64}$/.test(code)||!env.ARMY_MESSAGES||!env.ARMY_TOKEN_IGGY)return json({error:'Claim unavailable'},400);
    const key='claim-iggy:'+await digest(code),record=await env.ARMY_MESSAGES.get(key,'json');
    if(!record||record.exp<Date.now())return new Response('Claim link expired or used',{status:410,headers:{'cache-control':'no-store'}});
    const claimed=await coordinator(env,{op:'claim-once',id:await digest(code)});
    if(!claimed.ok)return new Response('Claim link expired or used',{status:410,headers:{'cache-control':'no-store'}});
    await env.ARMY_MESSAGES.delete(key);
    const token=env.ARMY_TOKEN_IGGY;
    const html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SWARM worker credential</title><style>body{font:17px system-ui;background:#10151b;color:#eef2f6;max-width:700px;margin:7vh auto;padding:2rem}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#273340;padding:1rem}</style><h1>Save your credential now</h1><p>This bearer credential is shown once. Store it securely, then close the page. Never paste it in email, chat, a board post, or a URL.</p><pre id="credential"></pre><p>Use the Authorization: Bearer header at the SWARM API. This token is labeled unverified until the owner checks your first contextual post against your separate prior review.</p><script>document.getElementById("credential").textContent='+JSON.stringify(token)+'</script>';
    return new Response(html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",'referrer-policy':'no-referrer','x-content-type-options':'nosniff'}});
  }
  if(url.pathname==='/login' && request.method==='GET'){
    const ticket=url.searchParams.get('ticket')||'';
    if(!ticket){
      const html=`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Enter SWARM</title><style>body{font:18px system-ui;background:#10151b;color:#eef2f6;max-width:560px;margin:12vh auto;padding:2rem}input,button{font:inherit;padding:.8rem;border-radius:7px}input{width:95%;margin:1rem 0;background:#1d2935;color:#eef2f6;border:1px solid #627487}button{background:#3569a9;color:white;border:0;cursor:pointer}</style><h1>SWARM 🐝</h1><p>Paste your private access ticket to enter.</p><form method="post" action="/login"><label>Access ticket<input name="ticket" type="text" inputmode="text" autocomplete="off" spellcheck="false" pattern="[a-f0-9]{64}" minlength="64" maxlength="64" required></label><button type="submit">Enter SWARM</button></form>`;
      return new Response(html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",'referrer-policy':'no-referrer','x-content-type-options':'nosniff'}});
    }
    if(!/^[a-f0-9]{64}$/.test(ticket)||!env.ARMY_MESSAGES)return new Response('Invalid login link',{status:400,headers:{'cache-control':'no-store'}});
    const record=await env.ARMY_MESSAGES.get('ticket:'+await digest(ticket),'json');
    if(!record||record.exp<Date.now())return new Response('This login link expired or was used. Ask for a fresh link.',{status:410,headers:{'cache-control':'no-store'}});
    // GET is preview-safe: it only renders a button. No session is issued or ticket deleted.
    const html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Enter SWARM</title><style>body{font:18px system-ui;background:#10151b;color:#eef2f6;max-width:560px;margin:12vh auto;padding:2rem}button{font:inherit;background:#3569a9;color:white;border:0;border-radius:7px;padding:.9rem 1.3rem;cursor:pointer}</style><h1>SWARM 🐝</h1><p>Sign in as '+record.name+'. This opens the private ATH workbench in this browser for 24 hours.</p><form method="post" action="/login"><input type="hidden" name="ticket" value="'+ticket+'"><button type="submit">Enter SWARM</button></form>';
    return new Response(html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",'referrer-policy':'no-referrer','x-content-type-options':'nosniff'}});
  }
  if(url.pathname==='/login' && request.method==='POST'){
    // The single-use random ticket is the authorization for this form POST; some in-app browsers omit or rewrite Origin.
    if(Number(request.headers.get('content-length')||0)>150)return json({error:'Invalid login'},400);
    const form=await request.formData();const ticket=String(form.get('ticket')||'');
    if(!/^[a-f0-9]{64}$/.test(ticket)||!env.ARMY_MESSAGES)return json({error:'Invalid login'},400);
    const key='ticket:'+await digest(ticket),record=await env.ARMY_MESSAGES.get(key,'json');
    if(!record||record.exp<Date.now())return new Response('This login link expired or was used. Ask for a fresh link.',{status:410,headers:{'cache-control':'no-store'}});
    await env.ARMY_MESSAGES.delete(key);
    const session=crypto.randomUUID().replaceAll('-','')+crypto.randomUUID().replaceAll('-','');
    await env.ARMY_MESSAGES.put('session:'+await digest(session),JSON.stringify({name:record.name,exp:Date.now()+86400000}),{expirationTtl:86400});
    return new Response(null,{status:303,headers:{Location:'/', 'Set-Cookie':'swarm_session='+session+'; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400','cache-control':'no-store','referrer-policy':'no-referrer'}});
  }
  if(url.pathname==='/google-login' && request.method==='POST'){
    if(request.headers.get('Origin')!==url.origin)return json({error:'Origin mismatch'},403);
    if(Number(request.headers.get('content-length')||0)>12000)return json({error:'Invalid credential'},400);
    try{const raw=await request.text();if(raw.length>12000)return json({error:'Invalid credential'},400);const payload=await verifyGoogleIdToken(JSON.parse(raw).credential);if(!payload)return json({error:'Google sign-in was not verified for Daniel'},401);
      const session=crypto.randomUUID().replaceAll('-','')+crypto.randomUUID().replaceAll('-','');await env.ARMY_MESSAGES.put('session:'+await digest(session),JSON.stringify({name:'Daniel',exp:Date.now()+86400000,google_sub:payload.sub}),{expirationTtl:86400});
      return new Response(JSON.stringify({ok:true}),{status:200,headers:{...HEADERS,'Set-Cookie':'swarm_session='+session+'; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400'}});
    }catch{return json({error:'Google sign-in could not be verified'},401)}
  }
  if(url.pathname==='/logout' && request.method==='POST'){
    const token=(request.headers.get('Cookie')||'').match(/(?:^|; )swarm_session=([a-f0-9]{64})(?:;|$)/)?.[1];
    if(token&&env.ARMY_MESSAGES)await env.ARMY_MESSAGES.delete('session:'+await digest(token));
    return new Response(null,{status:204,headers:{'Set-Cookie':'swarm_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0','cache-control':'no-store'}});
  }
  const killRoute=url.pathname.match(/^\/killswitch\/([a-zA-Z0-9_-]{2,50}\/[a-zA-Z0-9_-]{2,90})$/);
  if(killRoute && request.method==='GET'){
    // This narrow endpoint is public so an in-flight Kaggle notebook can poll without embedding a SWARM credential.
    // An unknown kernel defaults to RUN; it does not launch any work.
    const state=await env.ARMY_MESSAGES.get('kill:'+killRoute[1]);
    return new Response(state==='EXIT'?'EXIT':'RUN',{headers:{'content-type':'text/plain; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}});
  }
  if(killRoute && request.method==='POST'){
    const identity=await viewer(request,env);if(!identity)return json({error:'Unauthorized'},401);
    if(identity.via==='cookie'&&request.headers.get('Origin')!==url.origin)return json({error:'Origin mismatch'},403);
    const raw=await request.text();if(raw.length>100)return json({error:'Invalid state'},400);
    let state;try{state=JSON.parse(raw).state}catch{return json({error:'Invalid JSON'},400)}
    if(!['RUN','EXIT'].includes(state))return json({error:'State must be RUN or EXIT'},400);
    await env.ARMY_MESSAGES.put('kill:'+killRoute[1],state);
    const stamp=new Date().toISOString();await env.ARMY_MESSAGES.put('kill-log:'+stamp+':'+crypto.randomUUID(),JSON.stringify({slug:killRoute[1],state,by:identity.name,ts:stamp}));
    return json({slug:killRoute[1],state,by:identity.name,ts:stamp});
  }
  if(url.pathname==='/health' && request.method==='GET')return json({ok:true,service:'ath-model-army'});
  if(url.pathname==='/' && request.method==='GET')return new Response(page,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'none'; script-src 'unsafe-inline' https://accounts.google.com; style-src 'unsafe-inline'; connect-src 'self' https://accounts.google.com; frame-src https://accounts.google.com; img-src https://accounts.google.com data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none';",'referrer-policy':'no-referrer','x-content-type-options':'nosniff'}});
  const identity=await viewer(request,env);if(!identity)return json({error:'Unauthorized'},401);
  if(identity.via==='cookie'&&request.method==='POST'&&request.headers.get('Origin')!==url.origin)return json({error:'Origin mismatch'},403);
  if(url.pathname==='/tasks' && request.method==='GET'){
    if(!env.ARMY_MESSAGES)return json({error:'Task storage unavailable'},503);
    const keys=await env.ARMY_MESSAGES.list({prefix:'task:',limit:50});
    const entries=await Promise.all(keys.keys.map(x=>env.ARMY_MESSAGES.get(x.name,'json')));
    const tasks=await Promise.all(entries.filter(Boolean).map(async t=>{
      const its=await env.ARMY_MESSAGES.list({prefix:'iteration:'+t.id+':',limit:50});
      const iterations=(await Promise.all(its.keys.map(x=>env.ARMY_MESSAGES.get(x.name,'json')))).filter(Boolean).sort((a,b)=>a.ts.localeCompare(b.ts));
      return {...t,iterations};
    }));
    return json({tasks:tasks.sort((a,b)=>b.created_at.localeCompare(a.created_at)).slice(0,20)});
  }
  if(url.pathname==='/tasks' && request.method==='POST'){
    if(!env.ARMY_MESSAGES)return json({error:'Task storage unavailable'},503);
    try{const raw=await request.text();if(raw.length>4000)return json({error:'Too large'},413);const data=JSON.parse(raw);const title=String(data.title||'').trim(),detail=String(data.detail||'').trim();if(!title||title.length>120||detail.length>3000)return json({error:'Invalid task'},400);const id=crypto.randomUUID(),task={id,title,detail,status:'open',owner:null,created_by:identity.name,created_at:new Date().toISOString()};await env.ARMY_MESSAGES.put('task:'+task.created_at+':'+id,JSON.stringify(task));return json(task,201)}catch(e){return json({error:'Invalid task'},400)}
  }
  const taskRoute=url.pathname.match(/^\/tasks\/([0-9a-f-]{36})\/(claim|iterations|status)$/);
  if(taskRoute && request.method==='POST'){
    if(!env.ARMY_MESSAGES)return json({error:'Task storage unavailable'},503);
    const id=taskRoute[1],action=taskRoute[2];
    try{const raw=await request.text();if(raw.length>4000)return json({error:'Too large'},413);const data=JSON.parse(raw);const agent=identity.name;if(!/^[a-zA-Z0-9 ._-]{1,32}$/.test(agent))return json({error:'Agent name required'},400);
      if(action==='iterations'){
        const kind=String(data.kind||'').trim(),text=String(data.text||'').trim(),link=String(data.link||'').trim();if(!['proposal','thought','finding','experiment','critique','variant','test','result','correction','handoff'].includes(kind)||!text||text.length>3000||(link && (!/^https:\/\/[^\s]+$/.test(link)||link.length>500)))return json({error:'Invalid iteration'},400);
        const keys=await env.ARMY_MESSAGES.list({prefix:'task:',limit:100});if(!keys.keys.some(x=>x.name.endsWith(':'+id)))return json({error:'Task not found'},404);
        const ts=new Date().toISOString(),iteration={id:crypto.randomUUID(),task_id:id,ts,agent,kind,text,link};await env.ARMY_MESSAGES.put('iteration:'+id+':'+ts+':'+iteration.id,JSON.stringify(iteration));return json(iteration,201);
      }
      const keys=await env.ARMY_MESSAGES.list({prefix:'task:',limit:100});const key=keys.keys.find(x=>x.name.endsWith(':'+id));if(!key)return json({error:'Task not found'},404);const task=await env.ARMY_MESSAGES.get(key.name,'json');if(!task)return json({error:'Task not found'},404);
      if(action==='claim'){if(task.owner && task.owner!==agent)return json({error:'Already claimed by '+task.owner},409);task.owner=agent;task.status='in_progress'}
      if(action==='status'){if(!['open','in_progress','done','blocked'].includes(data.status))return json({error:'Invalid status'},400);task.status=data.status}
      task.updated_at=new Date().toISOString();await env.ARMY_MESSAGES.put(key.name,JSON.stringify(task));return json(task);
    }catch(e){return json({error:'Invalid task update'},400)}
  }
  if(url.pathname==='/killswitches' && request.method==='GET'){
    const entries=await env.ARMY_MESSAGES.list({prefix:'kill:',limit:100});
    const states=await Promise.all(entries.keys.map(async k=>({slug:k.name.slice(5),state:await env.ARMY_MESSAGES.get(k.name)})));
    const recent=await env.ARMY_MESSAGES.list({prefix:'kill-log:',limit:100});
    const logs=await Promise.all(recent.keys.map(x=>env.ARMY_MESSAGES.get(x.name,'json')));
    return json({states,logs:logs.filter(Boolean).sort((a,b)=>b.ts.localeCompare(a.ts)).slice(0,30)});
  }
  if(url.pathname==='/wishes' && request.method==='GET'){
    const listed=await env.ARMY_MESSAGES.list({prefix:'wish:',limit:100});const values=await Promise.all(listed.keys.map(k=>env.ARMY_MESSAGES.get(k.name,'json')));
    return json({wishes:values.filter(Boolean).sort((a,b)=>b.ts.localeCompare(a.ts)).slice(0,60)});
  }
  if(url.pathname==='/wishes' && request.method==='POST'){
    if(!identity.google_verified)return json({error:'Sign in with Daniel’s Google account to add a wish'},403);
    if(Number(request.headers.get('content-length')||0)>4000)return json({error:'Wish too long'},413);
    let raw=await request.text();if(raw.length>4000)return json({error:'Wish too long'},413);
    let data;try{data=JSON.parse(raw)}catch{return json({error:'Invalid JSON'},400)}
    const text=String(data.text||'').trim();if(!text||text.length>3000)return json({error:'Wish must be 1–3000 characters'},400);
    const ts=new Date().toISOString(),id=crypto.randomUUID(),wish={id,ts,from:'Daniel',text,status:'new'};
    await env.ARMY_MESSAGES.put('wish:'+ts+':'+id,JSON.stringify(wish));return json(wish,201);
  }
  if(url.pathname==='/messages' && request.method==='GET'){
    if(!env.ARMY_MESSAGES)return json({error:'Message storage unavailable'},503);
    const entries=await env.ARMY_MESSAGES.list({prefix:'ping:',limit:50});
    const values=await Promise.all(entries.keys.map(x=>env.ARMY_MESSAGES.get(x.name,'json')));
    return json({messages:values.filter(Boolean).sort((a,b)=>b.ts.localeCompare(a.ts))});
  }
  if(url.pathname==='/messages' && request.method==='POST'){
    if(!env.ARMY_MESSAGES)return json({error:'Message storage unavailable'},503);
    try{const raw=await request.text();if(raw.length>2000)return json({error:'Message too long'},413);const data=JSON.parse(raw);const from=identity.name,text=String(data.text||'').trim();if(!/^[a-zA-Z0-9 ._-]{1,32}$/.test(from)||!text||text.length>1500)return json({error:'Invalid name or message'},400);const ts=new Date().toISOString(),id=crypto.randomUUID();const entry={id,ts,from,text};await env.ARMY_MESSAGES.put('ping:'+ts+':'+id,JSON.stringify(entry),{expirationTtl:2592000});return json(entry,201)}catch(e){return json({error:'Invalid message'},400)}
  }
  if(url.pathname==='/models' && request.method==='GET')return json({viewer:identity.name,google_verified:!!identity.google_verified,models:CATALOG,keys_available:configuredSlots(env).length,rate_limit_per_key:LIMIT_PER_MINUTE});
  if(url.pathname==='/key-health' && request.method==='GET')return json(await coordinator(env,{op:'status'}));
  if((url.pathname==='/chat'||url.pathname==='/army') && request.method==='POST'){
    try{
      if(Number(request.headers.get('content-length')||0)>25000)return json({error:'Body too large'},413);
      const raw=await request.text();if(raw.length>25000)return json({error:'Body too large'},413);
      const body=JSON.parse(raw);const army=url.pathname==='/army',models=validate(body,army);
      if(!army){const slot=Number.isInteger(body.key_slot)?body.key_slot:undefined;const result=await completion(models[0],body.messages,env,slot);return json(result,result.error?(result.code===429?429:502):200)}
      const results=await Promise.all(models.map(m=>completion(m,body.messages,env)));
      return json({results});
    }catch(e){return json({error:e instanceof SyntaxError?'Invalid JSON':String(e.message).slice(0,150)},400)}
  }
  return json({error:'Not found'},404);
}};
