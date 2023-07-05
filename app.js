const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const cover= document.getElementById("cover");


menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    cover.classList.toggle('im-active');
})

