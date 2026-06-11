// ==================== MODAL FUNCTIONS ====================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ==================== ANIMATED TITLES ====================
document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.titles');
    let currentIndex = 0;

    function showTitle() {
        titles.forEach(title => title.classList.remove('active'));
        if (titles.length > 0) {
            titles[currentIndex].classList.add('active');
            currentIndex = (currentIndex + 1) % titles.length;
        }
    }

    if (titles.length > 0) {
        showTitle();
        setInterval(showTitle, 3000);
    }

    // ==================== MENU TOGGLE ====================
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbar.style.display = 'none';
            });
        });
    }

    // ==================== SCROLL ANIMATIONS ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });

    // ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== CONTACT FORM HANDLER ====================
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Formspree handles the submission automatically
            // You can add custom validation here if needed
            console.log('Form submitted');
        });
    }
});

// ==================== RESPONSIVE NAVBAR CLOSE ON RESIZE ====================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.display = 'flex';
        }
    }
});
