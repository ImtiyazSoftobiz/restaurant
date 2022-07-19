const createNavbar = () => {
    const header = document.querySelector("#header");

    let page = 'home';

    const nav = document.createElement("div");
    nav.id = 'nav';

    const home = document.createElement("div");
    home.id = 'home';
    const homep = document.createElement("p");
    homep.textContent = 'Home';
    home.appendChild(homep);

    const menu = document.createElement("div");
    menu.id = 'menu';
    const menup = document.createElement("p");
    menup.textContent = 'Menu';
    menu.appendChild(menup);

    const about = document.createElement("div");
    about.id = 'about';
    const aboutp = document.createElement("p");
    aboutp.textContent = 'About';
    about.appendChild(aboutp);

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

    header.appendChild(nav);
};

export default createNavbar;