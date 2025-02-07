function toggleMenu() {
    const menu = document.querySelector('.header-links');
    menu.classList.toggle('show');
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.header-links');
    const menuButton = document.querySelector('.header-menu');

    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('show');
    }
});