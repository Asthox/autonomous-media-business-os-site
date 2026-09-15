(() => {
  const config = window.AMBOS_CONFIG || {};

  document.querySelectorAll('[data-current-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-contact-email]').forEach(el => {
    const email = config.contactEmail || 'YOUR_EMAIL@example.com';
    el.textContent = email;
    if (el.tagName === 'A') el.href = `mailto:${email}`;
  });

  if ((config.contactEmail || '').includes('YOUR_EMAIL')) {
    document.querySelectorAll('[data-config-warning]').forEach(el => el.style.display = 'block');
  }

  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('is-visible'));
})();
