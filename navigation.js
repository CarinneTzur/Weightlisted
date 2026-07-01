document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('globalMenuButton');
    const panel = document.getElementById('globalMenuPanel');
    const overlay = document.getElementById('globalMenuOverlay');

    if (!button || !panel || !overlay) return;

    const closeMenu = function () {
        panel.classList.remove('open');
        overlay.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Open navigation menu');
    };

    button.addEventListener('click', function () {
        const isOpen = panel.classList.toggle('open');
        overlay.classList.toggle('open', isOpen);
        button.setAttribute('aria-expanded', String(isOpen));
        button.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeMenu();
    });

    const currentPage = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
    panel.querySelectorAll('.global-menu-link').forEach(function (link) {
        if (link.getAttribute('href').toLowerCase() === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });
});
