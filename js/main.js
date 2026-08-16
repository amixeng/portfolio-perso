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