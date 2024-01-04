// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to update navigation links
function updateNavigation() {
    // List all sections and navigation links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    sections.forEach(section => {
        const navLink = document.querySelector(`#nav-${section.id}`);
        // Check if the section is in the viewport
        if (isInViewport(section)) {
            // Add 'active' class to the navigation link
            navLink.classList.add("active");
        } else {
            // Remove 'active' class
            navLink.classList.remove("active");
        }
    });
}

// Add the scroll event listener
window.addEventListener('scroll', updateNavigation);