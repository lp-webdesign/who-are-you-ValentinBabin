// Your script goes here
console.log("Hello World");

var nav = document.getElementById('nav');
var sections = document.querySelectorAll('.intro__btn');
console.log(nav);
console.log(sections);

function haveLocation() {
    const scrollNumber = window.scrollY;
    const heightSection = window.innerHeight;
    if (0 <= scrollNumber && scrollNumber < heightSection) {
        console.log("home");
        sections[0].style.color = '#000000';
        sections[1].style.color = '#444444';
        sections[2].style.color = '#444444';
    } else if (heightSection <= scrollNumber && scrollNumber < heightSection * 2) {
        console.log("pro");
        sections[0].style.color = '#444444';
        sections[1].style.color = '#000000';
        sections[2].style.color = '#444444';
    } else if (scrollNumber >= heightSection * 2) {
        console.log("perso");
        sections[0].style.color = '#444444';
        sections[1].style.color = '#444444';
        sections[2].style.color = '#000000';
    }

}

this.haveLocation();
window.addEventListener('click', haveLocation, false);
window.addEventListener('scroll', haveLocation, false);