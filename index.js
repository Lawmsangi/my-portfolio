let btn = document.getElementById('btn-union');
let close = document.getElementById('menu-close');
let menuBg = document.getElementById('menu-bg');
let menu = document.getElementById('menu');
let home = document.getElementById('home-section');
let header = document.getElementById('header');

btn.addEventListener('click', function(){
    menu.style.display = 'block';
    menuBg.style.display = 'block';
    document.body.style.overflow = 'hidden';
    home.style.filter = 'blur(8px)';
    header.style.filter = 'blur(8px)';
})

function closedMenu(){
    menu.style.display = 'none';
    menuBg.style.display = 'none';
    document.body.style.overflow = 'scroll';
    home.style.filter = 'blur(0)';
    header.style.filter = 'blur(0)';
}
close.addEventListener('click', closedMenu)

menu.addEventListener('click', function(e){
    menu.style.display = 'none';
    menuBg.style.display = 'none';
    document.body.style.overflow = 'scroll';
    home.style.filter = 'blur(0)';
    header.style.filter = 'blur(0)';
})  

