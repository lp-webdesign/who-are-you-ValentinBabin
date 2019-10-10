require("../assets/styles/reset.scss");
require("../assets/styles/main.scss");
// require("../assets/images/faviconLPWDS.ico")

import $ from "jquery";
import Navbar from "./Navbar";

$(document).ready(function() {
    const navBar = new Navbar();
    navBar.init();
});