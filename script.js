document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.sidebar-toggle');
    const menu = document.querySelector('.sidebar');

    // Toggle open/close
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (ev) => {
        const inside = ev.composedPath().includes(menu) || ev.composedPath().includes(toggle);
        if (!inside) {
            menu.classList.remove('active');
            toggle.classList.remove('open');
        }
    });

    // ESC to close
    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') {
            menu.classList.remove('active');
            toggle.classList.remove('open');
        }
    });

    // Auto collapse when clicking a link (UX ดีบนมือถือ)
    menu.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'A') {
            menu.classList.remove('active');
            toggle.classList.remove('open');
        }
    });

    const contactBtn = document.querySelector('.contact-button');
    const contactMenu = document.querySelector('.contact-menu');

    contactBtn.addEventListener('click', () => {
        contactMenu.classList.toggle('active');
    });

    document.addEventListener('click', (ev) => {
        const inside = ev.composedPath().includes(contactBtn) || ev.composedPath().includes(contactMenu);
        if (!inside) {
            contactMenu.classList.remove('active');
        }
    });
});