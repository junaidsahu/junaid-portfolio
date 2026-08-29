document.addEventListener('DOMContentLoaded', () => {
    // Force scroll to top on refresh
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll event listener for navbar background
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 15, 19, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(15, 15, 19, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Dashboard bars animation on scroll
    const bars = document.querySelectorAll('.bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars[0].style.height = '60%';
                bars[1].style.height = '80%';
                bars[2].style.height = '40%';
                bars[3].style.height = '90%';
            } else {
                bars.forEach(bar => bar.style.height = '10%');
            }
        });
    }, { threshold: 0.5 });

    const dashboard = document.querySelector('.dashboard-placeholder');
    if (dashboard) {
        // Reset bars initially
        bars.forEach(bar => bar.style.height = '10%');
        observer.observe(dashboard);
    }
});

// Modal Functions
function openModal(modalId, event) {
    if (event) event.preventDefault();
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
