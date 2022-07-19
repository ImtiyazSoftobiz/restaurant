import './PageImg/style.css'
import createHeader from "./PageImg/pages/header"
import createNavbar from './PageImg/pages/navbar';
import createMain from './PageImg/pages/main-page';
import createMenu from './PageImg/pages/menu-page';
import createAbout from './PageImg/pages/about-page';

// Setting the wrapper div
const body = document.querySelector("body");
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);
const main = document.createElement("div");
main.id = 'main';
content.appendChild(main);

// Creating the header and the navbar
createHeader();
createNavbar();
createMain();

// event listeners for the navbar

home.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    createMain();
});

menu.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    createMenu();
});

about.addEventListener("click", () => {
    document.getElementById("main").innerHTML = '';
    createAbout();
});

