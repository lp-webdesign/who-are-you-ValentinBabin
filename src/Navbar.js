import $ from "jquery";

export default class Navbar {

    /**
     * Constructor get buttons and add event on it
     */
    constructor() {
        this.homeBtn = $("a#homeBtn");
        this.proBtn = $('a#proBtn');
        this.persoBtn = $('a#persoBtn');
        this.addEvent();
    }

    /**
     * Function who init the class
     */
    init() {
        this.location(window.scrollY);
    }

    /**
     * Function who add event on buttons and window
     */
    addEvent() {
        $(window).on("scroll keyup", () => {
            this.location(window.scrollY);
        });
        this.homeBtn.on("click", () => {
            this.scrollTo("header#home");
        });
        this.proBtn.on("click", () => {
            this.scrollTo("section#pro");
        });
        this.persoBtn.on("click", () => {
            this.scrollTo("section#perso");
        });
    }

    /**
     * Function who scroll to a section
     * @param {string} direction 
     */
    scrollTo(direction) {
        $('html, body').animate({
            scrollTop: $(direction).offset().top,
            easing: 'linear'
        }, 200);
        this.location($(direction).offset().top);
    }

    /**
     * Function who detect the section where you are
     * @param {number} position 
     */
    location(position) {
        const heightSection = window.innerHeight;
        if (0 <= position && position < heightSection) {
            this.addClassActive(this.homeBtn);
            this.removeClassActive(this.proBtn, this.persoBtn);
        } else if (heightSection <= position && position < heightSection * 2) {
            this.addClassActive(this.proBtn);
            this.removeClassActive(this.homeBtn, this.persoBtn);
        } else if (position >= heightSection * 2) {
            this.addClassActive(this.persoBtn);
            this.removeClassActive(this.homeBtn, this.proBtn);
        }
    }

    /**
     * Function who add the class "active"
     * @param {JQuery<HTMLElement>} node 
     */
    addClassActive(node) {
        node.addClass("active");
    }

    /**
     * Function who remove the class "active"
     * @param {JQuery<HTMLElement>} node1 
     * @param {JQuery<HTMLElement>} node2 
     */
    removeClassActive(node1, node2) {
        node1.removeClass("active");
        node2.removeClass("active");
    }
}