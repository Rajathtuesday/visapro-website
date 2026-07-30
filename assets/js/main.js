// Escape Tour and Travels — shared behavior for every page.
// Nav "active" state is set per-page via a plain `active` class in the
// HTML (simplest and most robust for a static, no-build site) rather
// than detected here from the URL.

// Desktop nav
if (window.innerWidth >= 768) {
  const desktopLinks = document.querySelector('.nav-links-desktop');
  const hamburger = document.getElementById('hamburger');
  const navCta = document.querySelector('.nav-cta');
  if (desktopLinks) desktopLinks.style.display = 'flex';
  if (hamburger) hamburger.style.display = 'none';
  if (navCta) navCta.style.display = 'block';
}

// Hamburger toggle
function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}
const hamburgerBtn = document.getElementById('hamburger');
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = document.getElementById('mobileMenu').classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

// Scroll fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
