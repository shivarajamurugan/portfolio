// --- 1. Dynamic Typing Effect (Home Section) ---
const roles = ['Web Developer', 'Designer', 'Digital Marketing '];
let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const erasingSpeed = 100;
const delayBetweenRoles = 1500; 

function typeRole() {
    const dynamicText = document.getElementById('dynamic-text');
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
        setTimeout(typeRole, delayBetweenRoles / 2);
    }
}

// Start the typing effect when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial delay before the first word appears
    setTimeout(typeRole, 500); 
});


// --- 2. Mobile Menu Toggle and Scroll Reset ---
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
const navbarLinks = document.querySelectorAll('header .navbar a'); // Select all navigation links

// Toggle function for the mobile menu icon and header
function toggleMenu() {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

// Open/Close Menu on click
if (menu) { // Check if the menu icon exists
    menu.addEventListener('click', toggleMenu);
}

// Close menu when a navigation link is clicked (UX improvement for mobile)
navbarLinks.forEach(link => {
    link.addEventListener('click', toggleMenu); 
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
});


// --- 3. Visit Counter (Requires 'count' element in HTML) ---
function updateVisitCount() {
    const countDisplay = document.getElementById('count');
    
    if (!countDisplay) {
        console.warn("Visit count element with ID 'count' not found. Skipping visit count update.");
        return; 
    }

    let count = localStorage.getItem('visitCount');

    // Initialize or increment the count
    // The counter is now initialized to 0 and counts the current page load as +1
    count = count ? parseInt(count) + 1 : 1; 

    // Store the new count in local storage
    localStorage.setItem('visitCount', count);

    // Update the display
    countDisplay.innerText = count;
}

// Ensure the visit counter runs on page load
window.addEventListener('load', updateVisitCount);

// --- 4. Custom Cursor Logic (Removed non-functional/commented out code) ---
/* The event listeners for 'a' links have been removed as the necessary 
   cursor HTML elements ('.cursor-1', '.cursor-2') are not present in the HTML 
   and the logic was non-functional/commented out in the original. 
*/

// --- 5. Form Submission Logic (No JS needed for Formspree) ---
/* The old, insecure Email.send logic was removed. Formspree handles the submission
   securely using the 'action' attribute in your HTML form. */
