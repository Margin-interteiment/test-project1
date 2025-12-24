document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mainMenu = document.getElementById('mainMenu');

    if (hamburger && mainMenu) {
        hamburger.addEventListener('click', function () {
            mainMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    const galleryMore = document.getElementById('galleryMore');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryMore && galleryGrid) {
        galleryMore.addEventListener('click', function () {
            galleryGrid.classList.toggle('expanded');

            if (galleryGrid.classList.contains('expanded')) {
                galleryMore.textContent = 'LESS';
            } else {
                galleryMore.textContent = 'MORE';
            }
        });
    }
});
