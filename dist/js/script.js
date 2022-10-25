function imgSlider(anything){
    document.querySelector('.cilok').src = anything;
    return;
}

// navbar-fixed 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
}

//hamburger 
const hamburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//animasi berjalan
// var i=0, text;
// text = '';
// function mengetik() {
//     if(i < text.length) {
//         document.getElementById('cilok').innerHTML += text.charAt(i);
//         i++;
//         setTimeout(mengetik, 150);
//         return;
//     } 
// }
// mengetik();