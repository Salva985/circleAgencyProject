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
  
    if (scrollBtn) {
        console.log("Scroll button found:", scrollBtn);

      document.addEventListener("scroll", () => {    

        console.log("Scrolled!", window.scrollY);
        if (window.scrollY > 300) {
          scrollBtn.classList.add("show");
        } else {
          scrollBtn.classList.remove("show");
        }
      }); 
  
      scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    } else {
      console.warn("Scroll-to-top button not found in DOM.");
    }
  }); */

  document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollToTop");
  
    if (!scrollBtn) {
      console.warn("Scroll-to-top button not found.");
      return;
    }
  
    console.log("Scroll button found:", scrollBtn);
  
    // ✅ Use `document.body` instead of `window`
    document.body.addEventListener("scroll", () => {
      console.log("BODY scrollY:", document.body.scrollTop); // optional debug
  
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });
  
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
 




