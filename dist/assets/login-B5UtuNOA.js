import{i as n}from"./theme-9tR65ycm.js";const t=document.querySelectorAll(".tab-button"),o=document.querySelector(".login-form"),s=document.querySelector(".register-form");document.addEventListener("DOMContentLoaded",()=>{n(),t.forEach(e=>{e.addEventListener("click",()=>{t.forEach(i=>i.classList.remove("active")),e.classList.add("active"),e.textContent.trim()==="Iniciar Sesión"?(o.style.display="block",s.style.display="none"):(o.style.display="none",s.style.display="block")})})});
