// Load projects from data/projects.json and render into the grid
async function loadProjects() {
	try {
		const res = await fetch('/data/projects.json');
		const projects = await res.json();
		const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear placeholder

    projects.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';

      if (p.image) {
        const img = document.createElement('img');
        img.src = p.image;
        img.alt = p.title + ' screenshot';
        img.className = 'thumb';
        card.appendChild(img);
      }

      const h3 = document.createElement('h3');
      h3.textContent = p.title;
      card.appendChild(h3);

      const pEl = document.createElement('p');
      pEl.textContent = p.description;
      card.appendChild(pEl);

      const a = document.createElement('a');
      a.className = 'link';
      a.href = p.url || '#';
      a.textContent = 'View project →';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      card.appendChild(a);

      grid.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load projects', err);
  }
}

// Initialize on page load
