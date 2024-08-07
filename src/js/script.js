'use strict';

document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.bannerWatched) {
        setTimeout(() => {
            const modal = document.querySelector('.modal');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const closeBtn = modal.querySelector('#banner-close-btn');
            closeBtn.addEventListener('click', e => {
                e.target.closest('.modal').remove();
                sessionStorage.bannerWatched = true;
                document.body.style.overflow = 'visible';
            });

            const modalBtns = modal.querySelectorAll('.modal-btn');
            modalBtns.forEach(btn => {
                btn.addEventListener('click', e => {
                    e.preventDefault();
                    sessionStorage.bannerWatched = true;
                    const href = e.target.getAttribute('href');
                    location.href = href;
                });
            });
        }, 15000);
    }
});
