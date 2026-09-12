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

const valueonCustomer='https://arttoy61-png.github.io/valueon-home/customer/';
const valueonHome='https://arttoy61-png.github.io/valueon-home/';
document.querySelectorAll('.contact-list').forEach(list=>{
  if(list.querySelector('.contact-unified'))return;
  const inquiry=document.createElement('div');
  inquiry.className='contact-row contact-unified';
  inquiry.innerHTML=`<span>INQUIRY</span><strong><a href="${valueonCustomer}">제작 문의하기 ↗</a></strong>`;
  list.appendChild(inquiry);
  const home=document.createElement('div');
  home.className='contact-row contact-unified';
  home.innerHTML=`<span>HOME</span><strong><a href="${valueonHome}">VALUEON 공식 홈페이지 ↗</a></strong>`;
  list.appendChild(home);
});
