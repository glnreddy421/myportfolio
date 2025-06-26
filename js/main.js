// Load and render about section
async function loadAbout() {
    const response = await fetch('data/about.json');
    const data = await response.json();
    
    document.querySelector('.logo h1').textContent = data.name;
    document.querySelector('.logo .subtitle').textContent = data.title;
    
    const aboutContent = document.querySelector('.about-content');
    aboutContent.innerHTML = data.description
        .map(paragraph => `<p class="description">${paragraph}</p>`)
        .join('');
}

// Load and render skills section
async function loadSkills() {
    const response = await fetch('data/skills.json');
    const data = await response.json();
    
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = data.skillCategories
        .map(category => `
            <div class="skill-category">
                <h3>${category.name}</h3>
                <div class="skill-tags">
                    ${category.skills.map(skill => `
                        <span class="skill-tag">
                            <i class="${skill.icon}"></i>
                            ${skill.name}
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
}

// Load and render experience section
async function loadExperience() {
    const response = await fetch('data/experience.json');
    const data = await response.json();
    
    const experienceTimeline = document.querySelector('.experience-timeline');
    experienceTimeline.innerHTML = data.experiences
        .map(exp => createExperienceCard(exp))
        .join('');
}

function createExperienceCard(experience) {
    const card = document.createElement('div');
    card.className = 'experience-card';
    card.setAttribute('data-company', experience.company);

    const header = document.createElement('div');
    header.className = 'exp-header';
    
    const company = document.createElement('h3');
    company.textContent = experience.company;
    company.className = 'company-name';
    
    const position = document.createElement('p');
    position.className = 'position';
    position.textContent = experience.position;
    
    const duration = document.createElement('p');
    duration.className = 'duration';
    duration.textContent = experience.duration;
    
    header.appendChild(company);
    header.appendChild(position);
    header.appendChild(duration);
    
    const responsibilities = document.createElement('ul');
    responsibilities.className = 'responsibilities';
    
    experience.responsibilities.forEach(resp => {
        const li = document.createElement('li');
        li.textContent = resp;
        responsibilities.appendChild(li);
    });
    
    card.appendChild(header);
    card.appendChild(responsibilities);
    
    return card.outerHTML;
}

// Load and render education section
async function loadEducation() {
    const response = await fetch('data/education.json');
    const data = await response.json();
    
    const educationTimeline = document.querySelector('.education-timeline');
    educationTimeline.innerHTML = data.education
        .map(edu => `
            <div class="education-card">
                <div class="edu-header">
                    <h3>${edu.degree}</h3>
                    <span class="duration">${edu.duration}</span>
                </div>
                <p class="institution">${edu.institution}</p>
                <p class="location">${edu.location}</p>
                <p class="field">${edu.field}</p>
            </div>
        `).join('');
}

// Load and render interests section
async function loadInterests() {
    const response = await fetch('data/interests.json');
    const data = await response.json();
    
    const interestsContainer = document.querySelector('.interests-container');
    interestsContainer.innerHTML = data.interests
        .map(category => `
            <div class="interest-category">
                <div class="interest-header">
                    <i class="${category.icon}"></i>
                    <h3>${category.category}</h3>
                </div>
                <p class="interest-benefit">${category.benefit}</p>
                <ul class="interest-items">
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
}

// Load and render contact section
async function loadContact() {
    const response = await fetch('data/contact.json');
    const data = await response.json();
    
    const contactSection = document.querySelector('#contact .contact-grid');
    contactSection.innerHTML = `
        <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p><a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
        </div>
        <div class="contact-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <p>${data.contact.location}</p>
        </div>
        <div class="contact-card">
            <i class="fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p><a href="${data.contact.linkedin}" target="_blank">linkedin.com/in/glnreddy</a></p>
        </div>
        <div class="contact-card">
            <i class="fas fa-file-pdf"></i>
            <h3>Resume</h3>
            <p><a href="${data.contact.resume}" target="_blank" class="resume-button">Download Resume</a></p>
        </div>
    `;
}

// Initialize all sections
async function initializePortfolio() {
    try {
        await Promise.all([
            loadAbout(),
            loadSkills(),
            loadExperience(),
            loadEducation(),
            loadInterests(),
            loadContact()
        ]);
    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}

// Load everything when the page is ready
document.addEventListener('DOMContentLoaded', initializePortfolio); 