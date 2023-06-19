let btn = document.getElementById('union-btn');
let menuBg = document.getElementById('mobile-menu-bg');
let menu = document.getElementById('mobile-menu');
let close = document.getElementById('mobile-menu-close');
let home = document.getElementById('home-section')
let header = document.getElementById('header');

btn.addEventListener('click', function(){
    menu.style.display ='block';
    menuBg.style.display = 'block';
    document.body.style.overflow = 'hidden';
    home.style.filter = 'blur(9px)';
    header.style.filter = 'blur(9px)';
})

 function closedMenu(){
    menu.style.display ='none';
    menuBg.style.display = 'none';
    document.body.style.overflow = 'scroll';
    home.style.filter = 'blur(0)';
    header.style.filter = 'blur(0)';
}
close.addEventListener('click', closedMenu)

menu.addEventListener('click', closedMenu) 