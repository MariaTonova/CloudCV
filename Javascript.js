// script.js

// Sample skills data (replace with your own)
const skills = ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Linux'];

// Function to display skills
function displaySkills() {
    const skillsSection = document.getElementById('skills');
    const ul = document.createElement('ul');

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });

    skillsSection.appendChild(ul);
}

// Call the function to display skills
displaySkills();
