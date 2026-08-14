// Botón "volver arriba"
const topBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 400);
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Aviso de cookies
const banner = document.getElementById('cookieBanner');
if (!localStorage.getItem('cookiesOk')) {
  banner.classList.add('show');
}
document.getElementById('cookieOk').addEventListener('click', () => {
  localStorage.setItem('cookiesOk', '1');
  banner.classList.remove('show');
});