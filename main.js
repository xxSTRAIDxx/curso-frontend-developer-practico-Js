const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');//toggle elimina la clase del elemento si existe si no, la agrega
};