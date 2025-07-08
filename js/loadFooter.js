window.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.createElement("div");
    placeholder.id = "footer-placeholder";
    document.body.appendChild(placeholder);
  
    fetch("/components/footer.html")
      .then(res => res.text())
      .then(data => {
        placeholder.innerHTML = data;
      })
      .catch(err => console.error("Failed to load footer:", err));
  });