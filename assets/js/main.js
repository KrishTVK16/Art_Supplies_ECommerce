/**
 * Creative Ecosystem Core JS
 * Handles Theme Toggle, Global UI Events
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
});

/* --- 1. Theme System (Light/Dark) --- */
function initTheme() {
    const toggleBtn = document.querySelector('.theme-toggle-btn');
    const html = document.documentElement;
    const icon = toggleBtn?.querySelector('i');

    // Check LocalStorage or System Preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        html.setAttribute('data-theme', 'dark');
        updateIcon(true);
    } else {
        html.setAttribute('data-theme', 'light');
        updateIcon(false);
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme === 'dark');
        });
    }

    function updateIcon(isDark) {
        if (!icon) return;
        icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }
}

/* --- 2. Navbar Effects --- */
function initNavbar() {
    const navbar = document.querySelector('.navbar-glass');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
}
