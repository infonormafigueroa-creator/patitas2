const fs=require('fs');
const f='index.html';
let s=fs.readFileSync(f,'utf8');
let n=0;

// 1) Boton "Ver Plan Premium" en la tarjeta Gratis
const a1='Audio con voz (solo Premium)</div></div>';
const b1='Audio con voz (solo Premium)</div><button class="btn" onclick="go(\'premium\')" style="margin-top:14px">Ver Plan Premium 💎</button></div>';
if(s.includes("onclick=\"go('premium')\" style=\"margin-top:14px\">Ver Plan Premium")){console.log('• Boton ya existe (ok)');}
else if(s.includes(a1)){s=s.replace(a1,b1);n++;console.log('✓ Boton "Ver Plan Premium" agregado');}
else{console.log('❌ No encontre el ancla del boton');}

// 2) Pantalla #premium con todo lo que incluye
const scr=`<div class="screen" id="premium"><div class="pad" style="text-align:center"><div class="topbar" style="justify-content:flex-start"><span class="back" onclick="go('planes')">‹</span><h2 class="t">Plan <span>Premium</span> 💎</h2></div><div class="sub" style="margin-bottom:14px">Todo para cuidar mejor a tu peludo 🐾</div><div class="urg" style="background:linear-gradient(135deg,#2bb6a3,#4b8fd4);justify-content:center"><span style="font-size:24px">🔊</span><div style="text-align:left"><div style="font-size:11px;opacity:.95">Lo más pedido</div><div style="font-size:14px;font-weight:900">Escucha todo con voz</div></div></div><div class="price" style="margin-top:16px">$4.99 <small>/mes</small></div><div class="sub" style="margin-top:2px">o $39.99 al año (ahorra 33%)</div><div class="sectitle" style="text-align:left">Todo lo que incluye</div><div class="group" style="text-align:left"><div class="grow"><span class="ge">🔊</span><span class="gn">Audio en toda la app (voz de tu Guía)</span></div><div class="grow"><span class="ge">💬</span><span class="gn">Consultas ilimitadas con tu Guía</span></div><div class="grow"><span class="ge">🚨</span><span class="gn">Evaluador de urgencia</span></div><div class="grow"><span class="ge">📷</span><span class="gn">Análisis por foto</span></div><div class="grow"><span class="ge">📋</span><span class="gn">Historial médico completo</span></div><div class="grow"><span class="ge">📝</span><span class="gn">Traductor veterinario</span></div><div class="grow"><span class="ge">🐾</span><span class="gn">Varias mascotas</span></div><div class="grow"><span class="ge">⏰</span><span class="gn">Recordatorios ilimitados</span></div></div><button class="btn">Comenzar Premium 💎</button><div style="font-size:11px;color:#9fb4bc;font-weight:700;margin-top:14px">🔒 Pago seguro · 🔄 Cancela cuando quieras</div></div></div>`;
const a2='<div class="nav" id="nav">';
if(s.includes('id="premium"')){console.log('• Pantalla premium ya existe (ok)');}
else if(s.includes(a2)){s=s.replace(a2, scr+a2);n++;console.log('✓ Pantalla "Plan Premium" agregada');}
else{console.log('❌ No encontre el ancla de la pantalla');}

fs.writeFileSync(f,s);
console.log('Total cambios:',n);
