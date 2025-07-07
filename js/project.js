window.addEventListener('load', () => {
    const container = document.getElementById('project-detail');
  
    const fileName = window.location.pathname.split('/').pop();
    const uuid = fileName.replace('.html', '');
  
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
      .then(res => res.text())
      .then(data => {
        const projects = JSON.parse(data);
        const project = projects.find(p => p.uuid === uuid);
  
        if (!project) {
          container.innerHTML = `<p class="text-danger">Project not found.</p>`;
          return;
        }
  
        container.innerHTML = `
        <div class="project-content text-center">
          <h1 class="project-title mb-4">${project.name}</h1>
          <p class="project-description mb-5">${project.description}</p>
          <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.name}" class="project-detail-img img-fluid" />
          </div>
          <div class="project-content-text mt-5 text-start">
            <p>${project.content}</p>
          </div>
        </div>
      `;

      const otherProjectsContainer = document.querySelector('.other-projects .projects-container');
      const otherProjects = projects
      .filter(p => p.uuid !== uuid)
      .sort((a, b) => {
        if (a.uuid === "4") return 1;  // push project 4 to the bottom
        if (b.uuid === "4") return -1;
        return 0;
      });

      otherProjects.forEach(p => {
        const card = document.createElement("article");
        card.className = "project-card";

        card.innerHTML = `
          <a class="project-wrapper" href="${p.uuid}.html">
            <img class="img-project" src="${p.image}" alt="${p.name}" />
            <div class="project-inner-card">
              <h4 class="project-title">${p.name}</h4>
              <p class="project-description">${p.description}</p>
              <span class="learn-more">Learn more</span>
            </div>
          </a>
        `;

        otherProjectsContainer.appendChild(card);
      });
      })
      .catch(err => {
        console.error('Error loading project:', err);
        container.innerHTML = `<p class="text-danger">Could not load project details.</p>`;
      });
  });