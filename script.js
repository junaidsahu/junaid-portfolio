document.addEventListener('DOMContentLoaded', () => {
    // Force scroll restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Dynamic Navbar Background Blur on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'rgba(6, 9, 17, 0.92)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        } else {
            navbar.style.background = 'rgba(6, 9, 17, 0.8)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        }
    });

    // Smooth Scrolling for In-Page Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId) return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate Chart Bars on Intersection
    const chartBars = document.querySelectorAll('.chart-bar');
    if (chartBars.length > 0) {
        const heights = ['65%', '82%', '50%', '94%'];
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    chartBars.forEach((bar, idx) => {
                        bar.style.height = heights[idx] || '70%';
                    });
                }
            });
        }, { threshold: 0.4 });

        const chartSection = document.querySelector('.dash-chart');
        if (chartSection) {
            chartBars.forEach(bar => bar.style.height = '15%');
            chartObserver.observe(chartSection);
        }
    }

    console.log("%c✦ Junaid Ahmad | Senior Digital Marketer & AI Growth Specialist", "color: #38bdf8; font-size: 14px; font-weight: bold;");
});
