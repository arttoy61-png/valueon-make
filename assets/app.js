
const m=document.querySelector('.menu'),n=document.querySelector('.main-nav');
if(m&&n)m.addEventListener('click',()=>n.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.editorial-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.editorial-tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('[data-cat]').forEach(c=>c.style.display=(f==='ALL'||c.dataset.cat===f)?'':'none');
}));
