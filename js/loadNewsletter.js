window.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('newsletter-placeholder');
  
    if (placeholder) {
      fetch('/components/newsletter.html')
        .then((res) => res.text())
        .then((html) => {
          placeholder.innerHTML = html;
        })
        .catch((err) => console.error('Newsletter load error:', err));
    }
  });