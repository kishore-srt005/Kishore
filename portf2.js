const typingText = document.getElementById('typing-text');
const phrases = ['PCB Designer', 'Embedded Engineer'];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


const projects = [
    { title: 'Project 1', description: 'Hybrid Renewable Energy systems' },
    { title: 'Project 2', description: 'Mobile Signal Jammer' },
    { title: 'Project 3', description: 'Deep Fake Video Analyzer' },
   
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'col-md-6 col-lg-4 mb-4';
    projectElement.innerHTML = `
        <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            </div>
        </div>
    `;
    projectsContainer.appendChild(projectElement);
});


const Assignments = [
    { title: 'Project 1', description: 'Hybrid Renewable Energy systems' },
    { title: 'Project 2', description: 'Mobile Signal Jammer' },
    { title: 'Project 3', description: 'Deep Fake Video Analyzer' },
   
];



const skills = [
    { name: 'PCB Design', level: 90 },
    { name: 'Embedded Systems', level: 85 },
    { name: 'C', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML,CSS,JS' , level: 80 },
];

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'col-md-6 mb-3';
    skillElement.innerHTML = `
        <h5>${skill.name}</h5>
        <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
    `;
    skillsContainer.appendChild(skillElement);
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.skill-progress').forEach(progress => {
    gsap.to(progress, {
        width: progress.getAttribute('data-level') + '%',
        scrollTrigger: {
            trigger: progress,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
        }
    });
});

const hobbies = [
    { name: 'Farming', icon: 'fas fa-music' },
    { name: 'Reading', icon: 'fas fa-book' },
    { name: 'Playing', icon: 'fas fa-camera' },
    { name: 'Coding', icon: 'fas fa-code' },
];

const hobbiesContainer = document.getElementById('hobbies-container');

hobbies.forEach(hobby => {
    const hobbyElement = document.createElement('div');
    hobbyElement.className = 'col-6 col-md-3 mb-4';
    hobbyElement.innerHTML = `
        <div class="hobby-item">
            <i class="${hobby.icon} hobby-icon"></i>
            <h5>${hobby.name}</h5>
        </div>
    `;
    hobbiesContainer.appendChild(hobbyElement);
});


const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
   
    console.log('Form submitted');
    contactForm.reset();
    alert('Thank you for your message. I will get back to you soon!');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});


gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero h2', { opacity: 0, y: -30, duration: 1, delay: 0.5 });
gsap.from('.profile-pic', { opacity: 0, scale: 0.5, duration: 1, delay: 0.2 });

gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        }
    });
});

gsap.utils.toArray('.hobby-item').forEach(item => {
    gsap.from(item, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
        }
    });
});