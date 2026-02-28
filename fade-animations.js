/* ============================================
   FADE-IN ANIMATIONS - REUSABLE JAVASCRIPT
   ============================================ */

window.addEventListener('DOMContentLoaded', function () {
    // Fade in .site-title
    setTimeout(function () {
        const siteTitle = document.querySelector('.site-title');
        if (siteTitle) {
            siteTitle.classList.add('fade-in');
        }
    }, 200);

    // Fade in back link
    setTimeout(function () {
        const backLink = document.querySelector('.back-link');
        if (backLink) {
            backLink.classList.add('fade-in');
        }
    }, 550);

    // Fade in all .fadein-weightlisted spans (staggered animation)
    setTimeout(function () {
        const weightlistedElements = document.querySelectorAll('.fadein-weightlisted');
        weightlistedElements.forEach(function (el, idx) {
            setTimeout(() => el.classList.add('visible'), 300 + idx * 300);
        });
    }, 300);

    // Fade in content section
    setTimeout(function () {
        const contentSection = document.querySelector('.content-section');
        if (contentSection) {
            contentSection.classList.add('loaded');
        }
    }, 600);

    // Optional: Back button transition logic
    const backLink = document.querySelector('.back-link');
    const contentSection = document.querySelector('.content-section');

    if (backLink && contentSection) {
        backLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent immediate navigation

            // Remove fade in for site-title and weightlisted highlights
            const siteTitle = document.querySelector('.site-title');
            if (siteTitle) {
                siteTitle.classList.remove('fade-in');
            }
            
            document.querySelectorAll('.fadein-weightlisted').forEach(el => el.classList.remove('visible'));
            
            if (backLink) {
                backLink.classList.remove('fade-in');
            }

            // Apply exit transition
            if (contentSection) {
                contentSection.classList.remove('loaded');
                contentSection.classList.add('page-exit-slide-left');
            }

            // Navigate after transition completes
            const targetUrl = backLink.getAttribute('href') || 'index.html';
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600); // Match the CSS transition duration
        });
    }
});

