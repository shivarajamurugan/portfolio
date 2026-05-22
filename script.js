// Dynamic Typing Effect based on CV Roles [cite: 5, 18]
// const roles = ['Java Full Stack Developer', 'Frontend Developer', 'Web Developer'];
const roles = ['Java Full Stack Developer'];
let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const erasingSpeed = 80;
const delayBetweenRoles = 2000;

function typeRole() {
    const dynamicText = document.getElementById('dynamic-text');
    if (!dynamicText) return;
    const currentRole = roles[currentIndex];

    if (charIndex < currentRole.length) {
        dynamicText.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(eraseRole, delayBetweenRoles);
    }
}

function eraseRole() {
    const dynamicText = document.getElementById('dynamic-text');
    const currentRole = roles[currentIndex];

    if (charIndex > 0) {
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, erasingSpeed);
    } else {
        currentIndex = (currentIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

// Menu Toggle
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeRole, 500);
});