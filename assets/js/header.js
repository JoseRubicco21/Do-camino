const menu = document.querySelector('.header-links');
const menuButton = document.querySelector('.header-menu');

function toggleMenu() {
    menu.classList.toggle('show');
}

menu.addEventListener('click', function(){
    
})

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('show');
    }
});