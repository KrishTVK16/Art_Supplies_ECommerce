/* 
 * Art Supplies E-Commerce - Core Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header & Scroll Top
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle (Simplified)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('bi-list');
            icon.classList.toggle('bi-x');
        });
    }

    // 3. Scroll Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // 4. Modal Handling (Login/Signup)
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeBtns = document.querySelectorAll('.close-modal');

    window.openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = () => {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        document.body.style.overflow = 'auto';
    };

    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

    // Close modal on background click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) closeModal();
    });

    // 5. Theme Toggle Logic
    const themeBtn = document.getElementById('themeToggle');
    const body = document.documentElement;

    if (themeBtn) {
        // Initial state
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeBtn.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = themeBtn?.querySelector('i');
        if (icon) {
            icon.className = theme === 'light' ? 'bi bi-moon-stars' : 'bi bi-sun';
        }
    }
});
