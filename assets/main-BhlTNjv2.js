import{g,L as y,i as f,s as h}from"./theme-Oq8pAJXQ.js";async function C(o){return await g()?!0:(window.location.href=`/Flores-Valentin/login.html?returnUrl=${encodeURIComponent(o)}`,!1)}function u(){document.querySelectorAll(".protected-link").forEach(e=>{const t=e.getAttribute("href");t&&!t.includes("login.html")&&e.addEventListener("click",async a=>{a.preventDefault(),await C(t)&&(window.location.href=t)})})}function w(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u()}let m=document.querySelectorAll(".banner"),l=0;function E(){m.forEach((o,e)=>{o.style.display=e===l?"block":"none"}),l=(l+1)%m.length}setInterval(E,3e3);async function b(){const o=await g(),e=document.getElementById("login-button"),t=document.getElementById("logout-button"),a=document.querySelectorAll(".action-button");o?(e&&(e.style.display="none"),t&&(t.style.display="block",t.addEventListener("click",async()=>{await h()})),a.forEach(i=>{const n=i.cloneNode(!0);if(n.textContent.trim().includes("Pedido Especial")||n.getAttribute("data-i18n")==="special_order")n.href="./specialOrder.html";else if(n.textContent.trim().includes("Comprar Ahora")||n.getAttribute("data-i18n")==="buy_now"){const p=n.querySelector("i");if(p){n.innerHTML="",n.appendChild(p);const c=document.createElement("span");c.setAttribute("data-i18n","shopcart"),c.textContent="Mi Carrito",n.appendChild(c)}else n.textContent="Mi Carrito",n.setAttribute("data-i18n","shopcart");n.href="./shoppingCart.html"}i.parentNode.replaceChild(n,i)}),f.updatePageContent()):(e&&(e.style.display="block"),t&&(t.style.display="none"),a.forEach(i=>{i.href="./login.html"}))}document.addEventListener("DOMContentLoaded",async()=>{new y,f.updatePageContent(),await b(),w()});let d=new Howl({src:["/audios/romantic-saxophone-244539.mp3"],loop:!0,volume:.5});const r=document.getElementById("musicToggle");let s=!1;r.addEventListener("click",()=>{s?(d.pause(),r.classList.remove("playing")):(d.play(),r.classList.add("playing")),s=!s});document.addEventListener("click",function o(){s||(d.play(),r.classList.add("playing"),s=!0),document.removeEventListener("click",o)},{once:!0});document.addEventListener("DOMContentLoaded",function(){const o=6.241362256908526,e=-75.58840591379317,t=L.map("map").setView([o,e],15);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);const a=L.icon({iconUrl:"assets/images/logo.svg",iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-32]});L.marker([o,e],{icon:a}).addTo(t).bindPopup(`
        <div style="text-align: center;">
            <h5 style="color: #ff4d6d; margin-bottom: 8px;">Flores para San Valentín</h5>
            <p style="margin: 0;">Av. Principal 123, Ciudad</p>
            <p style="margin: 5px 0;"><strong>Tel:</strong> +57 300 123 4567</p>
        </div>
    `).openPopup(),L.circle([o,e],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:500}).addTo(t),t.zoomControl.setPosition("bottomright")});
