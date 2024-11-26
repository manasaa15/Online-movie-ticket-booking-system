const jobTitle = document.querySelector('.home h3');
const titles = ['Web Developer',  'Front End Developer', 'AI Enthusiast'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Updated typing effect function
function typeEffect() {
  const currentTitle = titles[titleIndex];
  
  if (isDeleting) {
    // Gradually remove characters
    jobTitle.textContent = currentTitle.substring(0, charIndex--);
  } else {
    // Gradually add characters
    jobTitle.textContent = currentTitle.substring(0, charIndex++);
  }

  // Pause and switch logic
  if (!isDeleting && charIndex === currentTitle.length) {
    // Pause briefly after completing a title
    isDeleting = true;
    setTimeout(typeEffect, 2000); // Display the full title for 2 seconds
  } else if (isDeleting && charIndex === 0) {
    // Switch to the next title after deleting the current one
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length; // Loop through the titles
    setTimeout(typeEffect, 1000); // Pause before typing the next title
  } else {
    
    const typingSpeed = isDeleting ? 50 : 120; // 
    setTimeout(typeEffect, typingSpeed);
  }
}

// Get the toggle button element
const toggleButton = document.getElementById('theme-toggle');

// Check the current theme from localStorage
const currentTheme = localStorage.getItem('theme');

// Apply the theme based on the current value in localStorage
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = 'Switch to Light Mode';
} else {
  toggleButton.textContent = 'Switch to Dark Mode';
}

// Add an event listener to toggle between dark and light modes
toggleButton.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
  
  // Check if the dark mode is now active
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Change the text of the toggle button based on the current mode
  toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  
  // Save the user's theme preference to localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});



typeEffect();


