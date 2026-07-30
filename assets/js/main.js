// Escape Tour and Travels: shared behavior for every page.
// Nav "active" state is set per-page via a plain `active` class in the
// HTML (simplest and most robust for a static, no-build site) rather
// than detected here from the URL.
//
// Desktop vs mobile nav visibility (.nav-links-desktop / .hamburger /
// .nav-cta / .mobile-menu) is handled entirely by CSS media queries in
// style.css, not JS -- a one-time `if (window.innerWidth >= 768)` check
// used to live here, which only ever ran once at page load and had no
// resize listener, so the desktop nav stayed stuck visible (as raw,
// unstyled markup, since its actual styling only exists inside the
// desktop media query) any time the viewport changed afterward.

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
