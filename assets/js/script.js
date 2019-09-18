// Your script goes here
console.log("Hello World");

// Get the nav items in an array 
var sections = document.querySelectorAll('.intro__btn');

/**
 * Function who change the color of a nav item
 */
function haveLocation() {
    const scrollNumber = window.scrollY;
    const heightSection = window.innerHeight;
    if (0 <= scrollNumber && scrollNumber < heightSection) {
        sections[0].style.color = '#000000';
        sections[1].style.color = '#444444';
        sections[2].style.color = '#444444';
    } else if (heightSection <= scrollNumber && scrollNumber < heightSection * 2) {
        sections[0].style.color = '#444444';
        sections[1].style.color = '#000000';
        sections[2].style.color = '#444444';
    } else if (scrollNumber >= heightSection * 2) {
        sections[0].style.color = '#444444';
        sections[1].style.color = '#444444';
        sections[2].style.color = '#000000';
    }

}

haveLocation();
window.addEventListener('click', haveLocation, false);
window.addEventListener('scroll', haveLocation, false);