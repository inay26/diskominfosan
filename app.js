// Navbar Scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    const navbarScroll = header.offsetTop;

    if(window.pageYOffset > navbarScroll){
        header.classList.add('navbar-scroll');
    } else {
        header.classList.remove('navbar-scroll');
    }

}


// JavaScript Hamburger
const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-click');
    navbar.classList.toggle('hidden');
});

