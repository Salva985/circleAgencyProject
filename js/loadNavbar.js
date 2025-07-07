window.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('navbar-placeholder');
  
    fetch('../components/navbar.html')
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;
  
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(bootstrapScript);
      })
      .catch(err => {
        console.error('Failed to load navbar:', err);
      });
  });