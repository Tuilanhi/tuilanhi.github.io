import"./BlogPost.astro_astro_type_script_index_0_lang.6184f5d4.js";const o=()=>{const n="ontouchstart"in window||navigator.maxTouchPoints>0;return window.innerWidth>=1024&&!n},i=document.getElementById("dot");o()?i.classList.remove("hidden"):i.classList.add("hidden");document.addEventListener("mousemove",n=>{o()&&(i.style.transform=`translate(${n.clientX}px, ${n.clientY}px)`)});window.addEventListener("load",function(){document.querySelectorAll(".slide-item").forEach(function(t,a){const d=t.getAttribute("data-transition-duration")||"0.5s",l=t.getAttribute("data-transition-easing")||"ease";t.style.transitionDuration=d,t.style.transitionTimingFunction=l,t.style.transitionDelay=`${a*.2}s`,t.classList.add("slide-in")})});const s=document.querySelectorAll("#my-section");let e=0;s[e].style.display="block";setInterval(()=>{s[e].style.display="none",e=(e+1)%s.length,s[e].style.display="block"},2e3);