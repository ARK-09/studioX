!function(){"use strict";!function(){var e=document.querySelector(".hero-contaienr"),n=document.querySelector(".nav-bar"),t=document.querySelector(".hamburger-box"),i=document.querySelector(".logo-container");function s(){var n=window.innerHeight;e.style.height="".concat(n,"px")}window.innerWidth<=880?n.classList.add("mobile-menu"):n.classList.contains("mobile-menu")&&n.classList.remove("mobile-menu"),document.getElementById("year").textContent=(new Date).getFullYear(),document.addEventListener("DOMContentLoaded",(function(){for(var e=document.getElementsByClassName("splide"),n=0;n<e.length;n++)new Splide(e[n]).mount()})),s(),window.addEventListener("scroll",(function(){window.scrollY>5?(n.classList.add("nav-bar-white"),n.classList.contains("mobile-menu")&&(i.style.display="none")):(n.classList.contains("nav-bar-white")&&n.classList.remove("nav-bar-white"),i.style.display="block")})),t.addEventListener("click",(function(){n.classList.toggle("menu-active"),n.classList.contains("menu-active")?i.style.display="none":i.style.display="block"})),window.addEventListener("resize",(function(){s(),window.innerWidth<=880?n.classList.add("mobile-menu"):n.classList.contains("mobile-menu")&&n.classList.remove("mobile-menu")}))}()}();