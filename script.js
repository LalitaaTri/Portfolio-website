// Language System
let currentLanguage = 'english';

// Language Toggle Function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'english' ? 'tamil' : 'english';
    updateContent();
    updateLanguageButton();
}

function updateLanguageButton() {
    const button = document.getElementById('languageBtn');
    if (currentLanguage === 'english') {
        button.textContent = 'EN | தமிழ்';
    } else {
        button.textContent = 'தமிழ் | EN';
    }
}

function updateContent() {
    const elements = document.querySelectorAll('[data-en][data-ta]');
    elements.forEach(element => {
        if (currentLanguage === 'english') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-ta');
        }
    });
}

// Countdown Timer
function startCountdown() {
    // Set to your event date and time (30 August 2025, 7:00 AM)
    const targetDate = new Date('2025-08-30T07:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        } else {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Registration Handler
function handleRegistration() {
    // Open Google Form in a new tab
    window.open("https://forms.gle/7XYndGoax4FotBAE6", "_blank");
}

// Scroll Animation for Fade-in Effects
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Navbar Background on Scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Mobile Menu Toggle (if needed in future)
function initMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be implemented when adding mobile hamburger menu
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScroll();
    initMobileMenu();
    
    // Set initial language button text
    updateLanguageButton();
    
    // Add some interactive hover effects
    const cards = document.querySelectorAll('.speaker-card, .partner-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Timeline item hover effects
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.timeline-icon');
            icon.style.transform = 'scale(1.1)';
            icon.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.timeline-icon');
            icon.style.transform = 'scale(1)';
            icon.style.boxShadow = 'none';
        });
    });
});

// Window load event for any final initializations
window.addEventListener('load', function() {
    // Hide loading spinner if there was one
    // Trigger any final animations
    document.body.classList.add('loaded');
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Adjust any dynamic sizing if needed
    // Could be useful for timeline or grid adjustments
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close any modals (future feature)
    if (e.key === 'Escape') {
        // Close any open modals or overlays
    }
    
    // Enter key on focused elements
    if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
        e.target.click();
    }
});

// Print styles support
window.addEventListener('beforeprint', function() {
    // Hide interactive elements when printing
    const interactiveElements = document.querySelectorAll('.language-toggle, .register-btn');
    interactiveElements.forEach(el => {
        el.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    // Restore interactive elements after printing
    const interactiveElements = document.querySelectorAll('.language-toggle, .register-btn');
    interactiveElements.forEach(el => {
        el.style.display = '';
    });
});