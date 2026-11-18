const header=document.getElementById("header"),btn=document.getElementById("menuBtn"),icon=document.getElementById("menuIcon");
function setMenu(o){header.classList.toggle("open",o);btn.setAttribute("aria-expanded",String(o));icon.src=o?"image/closeX.svg":"image/apexBars.svg"}
btn.addEventListener("click",()=>setMenu(!header.classList.contains("open")));
document.querySelectorAll("#header a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("active");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
