const menu = document.querySelector(".header-nav");
const menuLinks = document.querySelectorAll('.nav-link');
const buttons = document.querySelectorAll('.mobile-buttons');
const toggleMenu = function () {
    menu.classList.toggle("open");
}
for (let i = 0; i<menuLinks.length; i++){
    const menuLink = menuLinks[i];
    menuLink.addEventListener('click', function(e){
        e.stopPropagation();
        toggleMenu();
    });
}
for (let i = 0; i<buttons.length; i++){
    const button = buttons[i];
    button.addEventListener('click', function(e){
        e.stopPropagation();
        toggleMenu();
    });
}
document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const menu_is_active = menu.classList.contains("open");
    if (!its_menu && menu_is_active) {
        toggleMenu();
    }
});
 