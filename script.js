// Tasleem Bibi — Portfolio interactions
// 1) Mobile menu  2) Dark / light toggle (saved in localStorage)
// 3) Skills filter  4) Contact form validation

// --- Mobile menu ---
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
// Close the menu after tapping a link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Dark / light mode ---
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = '☀️';
}
themeBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀️' : '🌙';
});

// --- Skills filter ---
const filterButtons = document.querySelectorAll('.filter-btn');
const skillItems = document.querySelectorAll('#skillsGrid li');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    skillItems.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !show);
    });
  });
});

// --- Contact form validation ---
const form = document.getElementById('contactForm');
const formError = document.getElementById('formError');
const formSuccess = document.getElementById('formSuccess');
form.addEventListener('submit', event => {
  event.preventDefault();
  formError.textContent = '';
  formSuccess.textContent = '';
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name.length < 2) {
    formError.textContent = 'Please enter your name.';
    return;
  }
  // Simple email check: something@something.something
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formError.textContent = 'Please enter a valid email address.';
    return;
  }
  if (message.length < 10) {
    formError.textContent = 'Please write a message of at least 10 characters.';
    return;
  }
  // No backend yet — this is a front-end demo. In production, send via Formspree / backend.
  formSuccess.textContent = `Thank you, ${name}! Your message is ready — please also reach me on LinkedIn or Fiverr.`;
  form.reset();
});
