/* Replace this adapter when a backend is introduced; stable IDs are retained. */
const ProgressStore = (()=>{
 const key='cubert-academy-v2',legacyKey='cubert-academy-v1';let error='';
 function load(){try{const current=localStorage.getItem(key);if(current)return {state:Academy.normalize(JSON.parse(current)),migrated:false};const old=localStorage.getItem(legacyKey);if(old){const state=Academy.normalize(JSON.parse(old));save(state);return {state,migrated:true}}}catch(e){error='Dein gespeicherter Spielstand konnte nicht geladen werden. Er wurde nicht überschrieben. Importiere eine Sicherung oder setze ihn ausdrücklich zurück.';return {state:Academy.fresh(),migrated:false,readOnly:true}}return {state:Academy.fresh(),migrated:false}}
 function save(s){try{s.updatedAt=new Date().toISOString();localStorage.setItem(key,JSON.stringify(s));error='';return true}catch(e){error='Browser-Speicherung nicht verfügbar. Bitte exportiere deinen Spielstand.';return false}}
 return {load,save,get error(){return error}};
})();
