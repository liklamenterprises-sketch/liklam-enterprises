function toggleMenu(){const n=document.getElementById('navMenu');n.style.display=n.style.display==='flex'?'none':'flex';}
document.querySelectorAll('#navMenu a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=850)document.getElementById('navMenu').style.display='none';}));
document.getElementById('year').textContent=new Date().getFullYear();
