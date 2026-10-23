/* Pure curriculum and progress logic. Storage and UI are separate. */
const Academy = (() => {
 const worlds=CURRICULUM.worlds, modules=worlds.flatMap(w=>w.modules.map(m=>({...m,worldId:w.id}))), moduleById=Object.fromEntries(modules.map(m=>[m.id,m])), contentById=Object.fromEntries(LESSON_CONTENT.map(l=>[l.id,l]));
 const isPlayable=m=>!!m&&['pilot','published'].includes(m.status)&&!!contentById[m.contentId];
 const fresh=()=>({version:2,name:'Explorer',progress:{},equipped:'basic',legacyRewards:[],practice:{},updatedAt:null});
 function normalize(raw){
  if(!raw||typeof raw!=='object'||![1,2].includes(raw.version)||typeof raw.name!=='string'||raw.name.length>30)throw Error('Ungültiger Spielstand.');
  const s=fresh();s.name=raw.name.trim()||'Explorer';
  const entries=raw.version===1?raw.done:raw.progress;if(!entries||typeof entries!=='object'||Array.isArray(entries))throw Error('Ungültiger Fortschritt.');
  for(const [id,value] of Object.entries(entries)){
   const m=moduleById[id]; const v=raw.version===1?{best:value,revision:1,attempts:1,lastAttempt:null}:value;
   if(!isPlayable(m)||!v||!Number.isInteger(v.best)||v.best<0||v.best>3||!Number.isInteger(v.revision)||v.revision<1||!Number.isInteger(v.attempts)||v.attempts<0)throw Error('Unbekanntes Modul oder ungültiger Lernstand.');
   if(v.earnedBest!==undefined&&(!Number.isInteger(v.earnedBest)||v.earnedBest<v.best||v.earnedBest>3))throw Error("Ungültige historische Sterne.");
   s.progress[id]={earnedBest:v.earnedBest??v.best,best:v.best,revision:v.revision,attempts:v.attempts,lastAttempt:typeof v.lastAttempt==='string'?v.lastAttempt.slice(0,40):null};
  }
  if(raw.version===1&&['light','optics','reference','noise','illumination','workflow','research','industry'].every(id=>(s.progress[id]?.best||0)>=2))s.legacyRewards=['crown'];
  if(raw.version===2){
   if(raw.legacyRewards!==undefined&&(!Array.isArray(raw.legacyRewards)||raw.legacyRewards.some(i=>i!=='crown')))throw Error('Ungültige Ausstattung.');
   s.legacyRewards=raw.legacyRewards?.includes('crown')?['crown']:[];
   if(raw.practice!==undefined&&(!raw.practice||typeof raw.practice!=='object'||Array.isArray(raw.practice)))throw Error('Ungültige Praxisdaten.');
   for(const [id,p] of Object.entries(raw.practice||{})){
    const q=CURRICULUM.qualifications.find(q=>q.id===id);
    if(!q||!p||!Array.isArray(p.checks)||p.checks.length!==q.checklist.length||p.checks.some(b=>typeof b!=='boolean')||typeof p.notes!=='string'||p.notes.length>3000)throw Error('Ungültige Praxisdaten.');
    s.practice[id]={checks:[...p.checks],notes:p.notes};
   }
  }
  s.equipped=CURRICULUM.rewards.some(r=>r.id===raw.equipped)?raw.equipped:'basic';
  if(!rewardUnlocked(s,CURRICULUM.rewards.find(r=>r.id===s.equipped)))s.equipped='basic';
  return s;
 }
 const score=(s,id)=>s.progress[id]?.revision===moduleById[id]?.version?s.progress[id].best:0;
 const passed=(s,id)=>isPlayable(moduleById[id])&&score(s,id)>=2;
 const stars=s=>modules.reduce((n,m)=>n+(s.progress[m.id]?.earnedBest??s.progress[m.id]?.best??0),0);
 const worldComplete=(s,id)=>worlds.find(w=>w.id===id).modules.every(m=>isPlayable(m)&&passed(s,m.id));
 function moduleStatus(s,m){if(!isPlayable(m))return 'planned';if(passed(s,m.id))return 'passed';if(m.prerequisites.some(id=>!passed(s,id)))return 'locked';if(s.progress[m.id])return 'started';return 'ready'}
 function rewardUnlocked(s,r){if(s.legacyRewards.includes(r.id))return true;const rule=r.rule;switch(rule.type){case'always':return true;case'stars':return stars(s)>=rule.count;case'world':return worldComplete(s,rule.id);case'all-worlds':return worlds.every(w=>worldComplete(s,w.id));default:return false}}
 function qualification(s,id){const q=CURRICULUM.qualifications.find(q=>q.id===id);const missing=q.modules.filter(id=>!passed(s,id));return {q,missing,theoryReady:missing.length===0,priorRequired:q.qualifications,practiceComplete:q.checklist.every((_,i)=>s.practice[id]?.checks[i]===true),verified:false};}
 function completeQuiz(s,id,correct,total){const m=moduleById[id];if(!isPlayable(m)||moduleStatus(s,m)==='locked'||!Number.isInteger(total)||total!==contentById[m.contentId].q.length||!Number.isInteger(correct)||correct<0||correct>total)throw Error('Quiz kann nicht gewertet werden.');const n=m.passRatio?(correct===total?3:correct>=Math.ceil(total*m.passRatio)?2:correct>=Math.ceil(total/2)?1:0):Math.floor(correct/total*3);const old=s.progress[id];s.progress[id]={earnedBest:Math.max(old?.earnedBest??old?.best??0,n),best:Math.max(old?.revision===m.version?old.best:0,n),revision:m.version,attempts:(old?.attempts||0)+1,lastAttempt:new Date().toISOString()};return n;}
 return {worlds,modules,moduleById,contentById,isPlayable,fresh,normalize,score,passed,stars,worldComplete,moduleStatus,rewardUnlocked,qualification,completeQuiz};
})();
