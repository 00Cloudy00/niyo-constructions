document.addEventListener('DOMContentLoaded', () => {
  // set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // progressive enhancement: AJAX submit to Netlify then redirect to thank-you
    e.preventDefault();
    const data = new FormData(form);

    // honeypot check
    if (data.get('bot-field')) return;

    // build urlencoded body
    const body = new URLSearchParams();
    for (const [k, v] of data.entries()) {
      body.append(k, v);
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    })
      .then(() => {
        window.location.href = '/thank-you.html';
      })
      .catch(() => {
        // fallback: let browser do normal submit if AJAX fails
        form.submit();
      });
  });
});
