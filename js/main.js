window.addEventListener('load', () => {
    const container = document.querySelector('.projects-container');
  
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
      .then(res => res.text()) // Fetch as text first
      .then(data => {
        const projects = JSON.parse(data); // Then manually parse
        const topProjects = projects.filter(p =>
            ["1", "2", "3"].includes(p.uuid)
          );
  
        topProjects.forEach(project => {
          const article = document.createElement('article');
          article.className = 'project-card';
  
          article.innerHTML = `
            <a class="project-wrapper" href="./projects/${project.uuid}.html">
              <img class="img-project" src="${project.image}" alt="${project.name}" />
              <div class="project-inner-card">
                <h4 class="project-title">${project.name}</h4>
                <p class="project-description">${project.description}</p>
                <span class="learn-more">Learn more</span>
              </div>
            </a>
          `;
  
          container.appendChild(article);
        });
      })
      .catch(err => {
        console.error("Failed to load projects:", err);
      });
  });