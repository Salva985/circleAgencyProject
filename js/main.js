window.addEventListener('load', () => {
    const container = document.querySelector('.projects-container');
  
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
      .then(res => res.text())
      .then(data => {
        const projects = JSON.parse(data);
  
        const topProjects = ["1", "2", "3"].map(id =>
            projects.find(p => p.uuid === id)
          );
  
        topProjects.forEach(project => {
          const card = document.createElement("article");
          card.className = "project-card";
  
          card.innerHTML = `
            <a class="project-wrapper" href="./projects/${project.uuid}.html">
              <img class="img-project" src="${project.image}" alt="${project.name}" />
              <div class="project-inner-card">
                <h4 class="project-title">${project.name}</h4>
                <p class="project-description">${project.description}</p>
                <span class="learn-more">Learn more</span>
              </div>
            </a>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(err => {
        console.error('Failed to load projects:', err);
      });
  });



/*   document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTop");
  
    if (!scrollBtn) return;
  
    //document.body instead of window 
    document.body.addEventListener("scroll", () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollTop > 300) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });
  
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }); */

  document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTop");
  
    if (!scrollBtn) return;
  
    document.body.addEventListener("scroll", () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 300) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });
    
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  });
 




