
// Function to handle Intersection Observer
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.card, .about-text');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the element has faded in
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% of the element is visible
    });

    fadeInElements.forEach(el => {
        observer.observe(el);  // Observe each fade-in element
    });
}

// Initialize fade-in on scroll
fadeInOnScroll();


function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");

    var overlay = document.getElementById('overlay');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        overlay.style.display = 'block'; // Show the dimming overlay
      } else {
        menu.style.display = 'none';
        overlay.style.display = 'none'; // Hide the dimming overlay
      }
  }
