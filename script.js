const menuToggle=document.getElementById("menuToggle"),navLinks=document.getElementById("navLinks");
menuToggle?.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const progress=document.getElementById("scrollProgress");window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?(scrollY/max)*100:0}%`},{passive:true});
document.getElementById("year")&&(document.getElementById("year").textContent=new Date().getFullYear());
document.querySelectorAll(".faq-question").forEach(btn=>btn.addEventListener("click",()=>{const item=btn.parentElement;item.classList.toggle("open");btn.querySelector("span:last-child").textContent=item.classList.contains("open")?"−":"+"}));
document.querySelectorAll("[data-counter]").forEach(el=>{const target=Number(el.dataset.counter),suffix=el.dataset.suffix||"";let done=false;const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!done){done=true;let n=0;const step=Math.max(1,Math.ceil(target/45));const t=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n.toLocaleString()+suffix;if(n>=target)clearInterval(t)},25);io.disconnect()}}));io.observe(el)});
function sendEnquiry(e){e.preventDefault();const f=e.target;const name=f.name.value,course=f.course.value,phone=f.phone.value,message=f.message.value;const subject=encodeURIComponent(`Course Enquiry - ${course} - ${name}`);const body=encodeURIComponent(`Name: ${name}\nCourse: ${course}\nPhone: ${phone}\nMessage: ${message}`);window.location.href=`mailto:peqontechnology@gmail.com?subject=${subject}&body=${body}`;return false}


// Premium pointer glow + subtle 3D course-card tilt
if (window.matchMedia("(pointer:fine)").matches) {
  const glow=document.createElement("div");
  glow.className="pointer-glow";
  glow.style.cssText="position:fixed;width:260px;height:260px;border-radius:50%;pointer-events:none;z-index:0;background:radial-gradient(circle,rgba(95,105,255,.10),transparent 68%);transform:translate(-50%,-50%);opacity:0;transition:opacity .25s ease;mix-blend-mode:screen";
  document.body.appendChild(glow);
  window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";glow.style.opacity="1"},{passive:true});
  document.querySelectorAll(".course-card,.feature-card").forEach(card=>{
    card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*5}deg) translateY(-7px)`});
    card.addEventListener("pointerleave",()=>{card.style.transform=""});
  });
}

// Format animated counters using Indian number grouping.
document.querySelectorAll("[data-counter]").forEach(el=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting||el.dataset.formatted)return;
    const target=Number(el.dataset.counter); if(!Number.isFinite(target))return;
    el.dataset.formatted="true"; const start=performance.now(),duration=1400;
    const tick=now=>{const p=Math.min((now-start)/duration,1),eased=1-Math.pow(1-p,3);el.textContent=Math.round(target*eased).toLocaleString("en-IN");if(p<1)requestAnimationFrame(tick)};
    requestAnimationFrame(tick); observer.unobserve(el);
  }),{threshold:.35}); observer.observe(el);
});
