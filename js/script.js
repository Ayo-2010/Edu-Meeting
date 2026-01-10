// ========== Mobile Menu Toggle ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== Modal Functionality ==========
const applyBtn = document.getElementById('joinBtn');
const applyModal = document.getElementById('applyModal');
const closeModal = document.getElementById('closeModal');

applyBtn.addEventListener('click', () => {
    applyModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    applyModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === applyModal) {
        applyModal.classList.remove('active');
    }
});

// ========== Form Submissions ==========
const applyForm = document.getElementById('applyForm');
applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
    applyForm.reset();
    applyModal.classList.remove('active');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    contactForm.reset();
});

// ========== Scroll Animation ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.service-card, .meeting-card, .course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========== Active Navigation on Scroll ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== Button Ripple Effect ==========
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========== Page Load Animation ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ========== Counter Animation (for stats if added) ==========
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// ========== Lazy Loading Images ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========== Keyboard Navigation ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && applyModal.classList.contains('active')) {
        applyModal.classList.remove('active');
    }
});

// ========== Scroll to Top Button (optional) ==========
const createScrollTopButton = () => {
    const scrollTop = document.createElement('button');
    scrollTop.id = 'scrollTop';
    scrollTop.innerHTML = '↑';
    scrollTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTop.style.display = 'block';
        } else {
            scrollTop.style.display = 'none';
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollTop.addEventListener('mouseenter', () => {
        scrollTop.style.transform = 'translateY(-5px)';
    });

    scrollTop.addEventListener('mouseleave', () => {
        scrollTop.style.transform = 'translateY(0)';
    });
};

createScrollTopButton();

// ========== Initialize ==========
console.log('UNIFY Platform - Loaded Successfully');
