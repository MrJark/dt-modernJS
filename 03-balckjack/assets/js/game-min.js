const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],s=["A","J","Q","K"],n=[],l=(t=2)=>{e=d(),n=[];for(let s=0;s<t;s++)n.push(0);scorePC.innerHTML=0,scorePlayer.innerHTML=0,divCartasJugadores.forEach(e=>e.innerHTML=""),btnPedir.disabled=!1,btnDetener.disabled=!1},d=()=>{for(let n=2;n<=10;n++)for(let l of t)e.push(n+l);for(let d of t)for(let r of s)e.push(r+d);return e=_.shuffle(e)},r=()=>{if(0===e.length)throw"No quedan cartas en el deck";return e.shift()},i=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},a=(e,t)=>(n[t]=n[t]+i(e),scorePlayer.innerHTML=n[0],scorePC.innerHTML=n[n.length-1],n[t]),o=(e,t)=>{let s=document.createElement("img");s.src=`assets/cards/${e}.png`,s.classList.add("carta"),divCartasJugadores[t].append(s)},$=()=>{let[e,t]=n;setTimeout(()=>{t>e&&t<=21||e>21?alert(`Perdiste, tus puntos son ${e} y los del PC ${t}`):e>t||t>21?alert(`Ganaste, tus puntos son ${e} y los del PC ${t}`):alert(`Empate, los puntos son ${e}`)},100)},u=e=>{let t=0;do{let s=r();t=a(s,n.length-1),o(s,n.length-1)}while(t<e&&e<=21);$()};return btnPedir.addEventListener("click",()=>{let e=r(),t=a(e,0);o(e,0),t>21?(btnPedir.disabled=!0,btnDetener.desabled=!0,u(t)):21===t&&(btnPedir.disabled=!0,btnDetener.disabled=!0,u(t))}),btnDetener.addEventListener("click",()=>{btnPedir.disabled=!0,btnDetener.disabled=!0,u(n[0])}),btnNewGame.addEventListener("click",()=>{l()}),{nuevoJuego:l}})();

