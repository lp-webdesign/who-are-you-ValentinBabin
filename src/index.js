require("../assets/styles/reset.scss");
require("../assets/styles/main.scss");
// require("../assets/images/faviconLPWDS.ico")

import $ from "jquery";

$(document).ready(function() {

    /** Get the nav items in an array */
    const sections = document.querySelectorAll('.intro__btn'); /** Mettre en const */


    /** Virer les console log */

    /**
     * Function who change the color of a nav item
     */
    function haveLocation() {
        const scrollNumber = window.scrollY;
        const heightSection = window.innerHeight;
        if (0 <= scrollNumber && scrollNumber < heightSection) {
            sections[0].style.color = '#000000'; /* Passer en classe*/
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

    /* Faire en fonction event*/
    window.addEventListener('click', haveLocation);
    window.addEventListener('scroll', haveLocation);
    haveLocation();

    /** Objet avec la methode init, addevent, location, change couleur
     * variabiliser les boutons
     */
});