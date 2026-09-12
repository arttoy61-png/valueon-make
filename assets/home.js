(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.make-navigation');
  const close = (restoreFocus = false) => {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'MENU';
    if (restoreFocus) button.focus();
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'CLOSE' : 'MENU';
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') close(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.make-header')) close();
  });
  matchMedia('(max-width:760px)').addEventListener('change', () => close());
  document.querySelectorAll('.work-tile img').forEach(img => {
    const fallback = () => img.closest('.work-tile').classList.add('is-missing');
    img.addEventListener('error', fallback);
    if (img.complete && !img.naturalWidth) fallback();
  });
})();
