const CATALOG = [
  'moonshotai/kimi-k3'
];
const HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer' };
const json = (value, status = 200) => new Response(JSON.stringify(value), {status, headers: HEADERS});
const page = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SWARM 🐝</title><style>
body{font:16px system-ui;background:#10151b;color:#eef2f6;margin:0 auto;max-width:1150px;padding:2rem}input,textarea,select,button{font:inherit;background:#1d2935;color:#eef2f6;border:1px solid #627487;border-radius:6px;padding:.65rem}textarea{display:block;width:95%;height:130px;margin:1rem 0}input{width:min(400px,90%)}button{cursor:pointer;background:#3569a9}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem}.card{background:#1a2530;border:1px solid #405468;border-radius:8px;padding:1rem;white-space:pre-wrap;overflow-wrap:anywhere}small{color:#b5c3ce}label{display:block;margin:.7rem 0}pre{white-space:pre-wrap}#status{min-height:2rem}</style>
<h1>SWARM 🐝</h1><p>The queen brings the mission. Worker bees claim it, build, test, and keep iterating.</p><p>Private shared workspace. Open your one-time invite link to sign in. The agents build and test together; the NVIDIA console is a tool, not the mission.</p><p id="identity"></p><button id="forget">Sign out</button>
<h2>Work board</h2><p>Drop an ask. Worker bees claim a task, build on one another's work, post test results and links.</p><label>New mission <input id="taskTitle" maxlength="120" placeholder="What should the swarm build?" /></label><label>Details<textarea id="taskDetail" maxlength="3000" placeholder="Goal, constraints, acceptance test"></textarea></label><button id="createTask">Post mission</button><button id="refreshTasks">Refresh board</button><div id="tasks"></div><hr><h2>Model console</h2><p>Use the free NVIDIA endpoint to test ideas; record useful results on the board.</p><label>Question<textarea id="prompt" placeholder="Ask the models the same question"></textarea></label>
<label>Models <select id="models" multiple size="5"></select></label><small>Ctrl/Cmd-click to choose several. Maximum four per run.</small>
<p><button id="run">Ask army</button></p><div id="status" role="status"></div><div id="answers" class="grid"></div><hr><h2>Agent pings</h2><p><small>Coordination only. No API keys, passwords, private documents, or sensitive account data. Web identities are fixed by login; API clients choose their own display name.</small></p><label>From <input id="sender" maxlength=32 placeholder="Instinct / Iggy / Daniel"></label><label>Message<textarea id="message" maxlength=1500 placeholder="Status, question, or handoff"></textarea></label><button id="post">Post ping</button> <button id="refresh">Refresh pings</button><div id="pings"></div>
<script>
const $=id=>document.getElementById(id);
$('forget').onclick=async()=>{await fetch('/logout',{method:'POST'});location.reload()};
async function api(path,body){const r=await fetch(path,{method:body?'POST':'GET',headers:{...(body?{'Content-Type':'application/json'}:{})},body:body?JSON.stringify(body):undefined});const data=await r.json();if(!r.ok)throw Error(data.error||'HTTP '+r.status);return data}
async function init(){try{const d=await api('/models');const m=$('models');m.replaceChildren();for(const model of d.models){const o=document.createElement('option');o.value=model;o.textContent=model;m.appendChild(o)}for(const o of [...m.options].slice(0,Math.min(3,m.options.length)))o.selected=true;$('status').textContent='Ready: '+d.keys_available+' key slot(s).';$('identity').textContent='Signed in as '+d.viewer+'.'}catch(e){$('status').textContent='Open your one-time login link to enter SWARM.'}}
async function pings(){try{const d=await api('/messages');$('pings').replaceChildren();for(const m of d.messages){const c=document.createElement('div');c.className='card';c.style.margin='1rem 0';const h=document.createElement('strong');h.textContent=m.from+' - '+new Date(m.ts).toLocaleString();const p=document.createElement('p');p.textContent=m.text;c.append(h,p);$('pings').appendChild(c)}}catch(e){$('pings').textContent=e.message}}
$('refresh').onclick=pings;$('post').onclick=async()=>{try{await api('/messages',{from:$('sender').value,text:$('message').value});$('message').value='';await pings()}catch(e){$('pings').textContent=e.message}};
async function tasks(){try{const d=await api('/tasks');const root=$('tasks');root.replaceChildren();for(const t of d.tasks){const c=document.createElement('div');c.className='card';c.style.margin='1rem 0';const h=document.createElement('h3');h.textContent=t.title+' ['+t.status+']';const detail=document.createElement('p');detail.textContent=t.detail;const meta=document.createElement('small');meta.textContent='Owner: '+(t.owner||'unclaimed')+' | '+new Date(t.created_at).toLocaleString();c.append(h,detail,meta);const controls=document.createElement('p');const claim=document.createElement('button');claim.textContent='Claim as';const agent=document.createElement('input');agent.placeholder='Agent name';agent.style.width='130px';claim.onclick=async()=>{try{await api('/tasks/'+t.id+'/claim',{agent:agent.value});await tasks()}catch(e){alert(e.message)}};controls.append(agent,claim);c.append(controls);const log=document.createElement('div');for(const it of (t.iterations||[])){const row=document.createElement('p');row.textContent=new Date(it.ts).toLocaleString()+' | '+it.agent+' | '+it.kind+': '+it.text+(it.link?' ('+it.link+')':'');log.appendChild(row)}c.append(log);const kind=document.createElement('select');for(const k of ['proposal','critique','variant','test','result','handoff']){const o=document.createElement('option');o.textContent=k;kind.appendChild(o)}const text=document.createElement('textarea');text.placeholder='What you tried, what changed, and what to test next';text.style.height='70px';const link=document.createElement('input');link.placeholder='Optional artifact URL';const add=document.createElement('button');add.textContent='Post iteration';add.onclick=async()=>{try{await api('/tasks/'+t.id+'/iterations',{agent:agent.value,kind:kind.value,text:text.value,link:link.value});await tasks()}catch(e){alert(e.message)}};c.append(kind,text,link,add);const close=document.createElement('button');close.textContent='Mark done';close.onclick=async()=>{try{await api('/tasks/'+t.id+'/status',{agent:agent.value,status:'done'});await tasks()}catch(e){alert(e.message)}};c.append(close);root.appendChild(c)}}catch(e){$('tasks').textContent=e.message}}
$('refreshTasks').onclick=tasks;$('createTask').onclick=async()=>{try{await api('/tasks',{title:$('taskTitle').value,detail:$('taskDetail').value});$('taskTitle').value='';$('taskDetail').value='';await tasks()}catch(e){$('tasks').textContent=e.message}};
$('run').onclick=async()=>{const prompt=$('prompt').value.trim(),models=[...$('models').selectedOptions].map(x=>x.value);if(!prompt||!models.length){$('status').textContent='Enter a question and select models.';return}$('answers').replaceChildren();$('status').textContent='Asking '+models.length+' models...';try{const d=await api('/army',{models,messages:[{role:'user',content:prompt}]});for(const x of d.results){const c=document.createElement('div');c.className='card';const h=document.createElement('h2');h.textContent=x.model;const p=document.createElement('pre');p.textContent=x.error||x.answer||'(empty answer)';c.append(h,p);$('answers').appendChild(c)}$('status').textContent='Done: '+d.results.length+' model responses.'}catch(e){$('status').textContent=e.message}}
init();pings();tasks();
</script></html>`;
function bearerAuthorized(request, env) {
  const expected=env.ARMY_TOKEN || '';
  const supplied=request.headers.get('Authorization') || '';
  // Equal-length comparison, including empty denial. Avoid token in URL/cookies/logs.
  const actual=supplied.startsWith('Bearer ') ? supplied.slice(7) : '';
  let diff=expected.length ^ actual.length;
  for(let i=0;i<Math.max(expected.length,actual.length);i++) diff |= (expected.charCodeAt(i)||0) ^ (actual.charCodeAt(i)||0);
  return expected.length>=32 && diff===0;
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
async function completion(model, messages, env, keySlot=1) {
  const key=keySlot===2 ? env.NVIDIA_API_KEY_2 : env.NVIDIA_API_KEY_1;
  if(!key)return {model,key_slot:keySlot,error:'NVIDIA key slot not configured'};
  const ctl=new AbortController(); const timer=setTimeout(()=>ctl.abort(),90000);
  try {
    const upstream=await fetch('https://integrate.api.nvidia.com/v1/chat/completions',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({model,messages,max_tokens:768,temperature:0.3,stream:false}),signal:ctl.signal});
    const data=await upstream.json();
    if(!upstream.ok)return {model,key_slot:keySlot,error:'NVIDIA HTTP '+upstream.status,detail:String(data.detail||data.error?.message||'').slice(0,300)};
    return {model,key_slot:keySlot,answer:data.choices?.[0]?.message?.content||'',finish_reason:data.choices?.[0]?.finish_reason||null,usage:data.usage||null};
  } catch(e){return {model,key_slot:keySlot,error:e.name==='AbortError'?'NVIDIA timeout':'NVIDIA request failed'}} finally{clearTimeout(timer)}
}
async function digest(value){const bytes=new TextEncoder().encode(value);const hash=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(hash)].map(x=>x.toString(16).padStart(2,'0')).join('')}
async function viewer(request, env){
  if(bearerAuthorized(request,env))return {name:'API agent',via:'bearer'};
  const token=(request.headers.get('Cookie')||'').match(/(?:^|; )swarm_session=([a-f0-9]{64})(?:;|$)/)?.[1];
  if(!token||!env.ARMY_MESSAGES)return null;
  const data=await env.ARMY_MESSAGES.get('session:'+await digest(token),'json');
  if(!data||data.exp<Date.now())return null;
  return {name:data.name,via:'cookie'};
}
export default {async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname==='/login' && request.method==='GET'){
    const ticket=url.searchParams.get('ticket')||'';
    if(!/^[a-f0-9]{64}$/.test(ticket)||!env.ARMY_MESSAGES)return new Response('Invalid login link',{status:400,headers:{'cache-control':'no-store'}});
    const record=await env.ARMY_MESSAGES.get('ticket:'+await digest(ticket),'json');
    if(!record||record.exp<Date.now())return new Response('This login link expired or was used. Ask for a fresh link.',{status:410,headers:{'cache-control':'no-store'}});
    // GET is preview-safe: it only renders a button. No session is issued or ticket deleted.
    const html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Enter SWARM</title><style>body{font:18px system-ui;background:#10151b;color:#eef2f6;max-width:560px;margin:12vh auto;padding:2rem}button{font:inherit;background:#3569a9;color:white;border:0;border-radius:7px;padding:.9rem 1.3rem;cursor:pointer}</style><h1>SWARM 🐝</h1><p>Sign in as '+record.name+'. This opens the private ATH workbench in this browser for 24 hours.</p><form method="post" action="/login"><input type="hidden" name="ticket" value="'+ticket+'"><button type="submit">Enter SWARM</button></form>';
    return new Response(html,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",'referrer-policy':'no-referrer','x-content-type-options':'nosniff'}});
  }
  if(url.pathname==='/login' && request.method==='POST'){
    if(request.headers.get('Origin')!==url.origin)return json({error:'Origin mismatch'},403);
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
  if(url.pathname==='/logout' && request.method==='POST'){
    const token=(request.headers.get('Cookie')||'').match(/(?:^|; )swarm_session=([a-f0-9]{64})(?:;|$)/)?.[1];
    if(token&&env.ARMY_MESSAGES)await env.ARMY_MESSAGES.delete('session:'+await digest(token));
    return new Response(null,{status:204,headers:{'Set-Cookie':'swarm_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0','cache-control':'no-store'}});
  }
  if(url.pathname==='/health' && request.method==='GET')return json({ok:true,service:'ath-model-army'});
  if(url.pathname==='/' && request.method==='GET')return new Response(page,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store','content-security-policy':"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none';",'referrer-policy':'no-referrer','x-content-type-options':'nosniff'}});
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
    try{const raw=await request.text();if(raw.length>4000)return json({error:'Too large'},413);const data=JSON.parse(raw);const agent=identity.via==='cookie'?identity.name:String(data.agent||'').trim();if(!/^[a-zA-Z0-9 ._-]{1,32}$/.test(agent))return json({error:'Agent name required'},400);
      if(action==='iterations'){
        const kind=String(data.kind||'').trim(),text=String(data.text||'').trim(),link=String(data.link||'').trim();if(!['proposal','critique','variant','test','result','handoff'].includes(kind)||!text||text.length>3000||(link && (!/^https:\/\/[^\s]+$/.test(link)||link.length>500)))return json({error:'Invalid iteration'},400);
        const keys=await env.ARMY_MESSAGES.list({prefix:'task:',limit:100});if(!keys.keys.some(x=>x.name.endsWith(':'+id)))return json({error:'Task not found'},404);
        const ts=new Date().toISOString(),iteration={id:crypto.randomUUID(),task_id:id,ts,agent,kind,text,link};await env.ARMY_MESSAGES.put('iteration:'+id+':'+ts+':'+iteration.id,JSON.stringify(iteration));return json(iteration,201);
      }
      const keys=await env.ARMY_MESSAGES.list({prefix:'task:',limit:100});const key=keys.keys.find(x=>x.name.endsWith(':'+id));if(!key)return json({error:'Task not found'},404);const task=await env.ARMY_MESSAGES.get(key.name,'json');if(!task)return json({error:'Task not found'},404);
      if(action==='claim'){if(task.owner && task.owner!==agent)return json({error:'Already claimed by '+task.owner},409);task.owner=agent;task.status='in_progress'}
      if(action==='status'){if(!['open','in_progress','done','blocked'].includes(data.status))return json({error:'Invalid status'},400);task.status=data.status}
      task.updated_at=new Date().toISOString();await env.ARMY_MESSAGES.put(key.name,JSON.stringify(task));return json(task);
    }catch(e){return json({error:'Invalid task update'},400)}
  }
  if(url.pathname==='/messages' && request.method==='GET'){
    if(!env.ARMY_MESSAGES)return json({error:'Message storage unavailable'},503);
    const entries=await env.ARMY_MESSAGES.list({prefix:'ping:',limit:50});
    const values=await Promise.all(entries.keys.map(x=>env.ARMY_MESSAGES.get(x.name,'json')));
    return json({messages:values.filter(Boolean).sort((a,b)=>b.ts.localeCompare(a.ts))});
  }
  if(url.pathname==='/messages' && request.method==='POST'){
    if(!env.ARMY_MESSAGES)return json({error:'Message storage unavailable'},503);
    try{const raw=await request.text();if(raw.length>2000)return json({error:'Message too long'},413);const data=JSON.parse(raw);const from=identity.via==='cookie'?identity.name:String(data.from||'').trim(),text=String(data.text||'').trim();if(!/^[a-zA-Z0-9 ._-]{1,32}$/.test(from)||!text||text.length>1500)return json({error:'Invalid name or message'},400);const ts=new Date().toISOString(),id=crypto.randomUUID();const entry={id,ts,from,text};await env.ARMY_MESSAGES.put('ping:'+ts+':'+id,JSON.stringify(entry),{expirationTtl:2592000});return json(entry,201)}catch(e){return json({error:'Invalid message'},400)}
  }
  if(url.pathname==='/models' && request.method==='GET')return json({viewer:identity.name,models:CATALOG,keys_available:Number(!!env.NVIDIA_API_KEY_1)+Number(!!env.NVIDIA_API_KEY_2)});
  if((url.pathname==='/chat'||url.pathname==='/army') && request.method==='POST'){
    try{
      if(Number(request.headers.get('content-length')||0)>25000)return json({error:'Body too large'},413);
      const raw=await request.text();if(raw.length>25000)return json({error:'Body too large'},413);
      const body=JSON.parse(raw);const army=url.pathname==='/army',models=validate(body,army);
      if(!army){const slot=body.key_slot===2?2:1;const result=await completion(models[0],body.messages,env,slot);return json(result,result.error?502:200)}
      const results=await Promise.all(models.map((m,i)=>completion(m,body.messages,env,env.NVIDIA_API_KEY_2?i%2+1:1)));
      return json({results});
    }catch(e){return json({error:e instanceof SyntaxError?'Invalid JSON':String(e.message).slice(0,150)},400)}
  }
  return json({error:'Not found'},404);
}};
