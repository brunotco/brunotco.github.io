let headerMain = document.querySelector(".header-main");
let headerMobile = document.querySelector(".mobile-menu");

let isMenuOpen = false;

headerMobile.onclick = () => {
    headerMain.style.display = isMenuOpen ? "" : "flex";
    isMenuOpen = !isMenuOpen;
}