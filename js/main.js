// Point d'entrée JS

// Intersection Observer pour déclencher les animations au scroll
const observerOptions = {
    threshold: 0.3 // déclenche quand 30% de l'élément est visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // arrête d'observer une fois animé
        }
    });
}, observerOptions);

// Sections à observer
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

const timelineElement = document.querySelector('.timeline');
if (timelineElement) {
    observer.observe(timelineElement);
}
// Toggle dark/light mode
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Vérifie si un thème est déjà sauvegardé au chargement
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Mode clair';
}

// Au clic sur le bouton
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Mode clair';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Mode sombre';
    }
});
// Données des projets
const projects = [
    {
        title: "BarberKing",
        description: "Application web pour salon de coiffure, développée en équipe de deux. Frontend en Vanilla JS + Bootstrap 5, authentification JWT, gestion de rôles.",
        badges: ["JavaScript", "Bootstrap", "Node.js"]
    },
    {
        title: "ItSakafo",
        description: "Marketplace alimentaire étudiante avec système de vente et upload de photos. Développé en PHP, MySQL et Bootstrap.",
        badges: ["PHP", "MySQL", "Bootstrap"]
    },
    {
        title: "IT-Poker",
        description: "Application de gestion de caisse pour parties de poker, avec système de conversion points/Ariary, sans base de données (flat files).",
        badges: ["PHP", "JavaScript", "Bootstrap"]
    }
];

// Injection dynamique des cartes projets
const projectsContainer = document.querySelector('#projects-container');

if (projectsContainer) {
    projects.forEach((project) => {
        const badgesHTML = project.badges
            .map((badge) => `<span class="badge bg-secondary">${badge}</span>`)
            .join('');

        const cardHTML = `
            <div class="col-md-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        ${badgesHTML}
                    </div>
                </div>
            </div>
        `;

        projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}