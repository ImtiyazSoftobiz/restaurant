import lattesrc from '../images/latte.jpg';
import mochasrc from '../images/mocha.jpg';
import cappuccinosrc from '../images/cappuccino.jpg';
import macchiatosrc from '../images/macchiato.jpg';
import espressosrc from '../images/espresso.jpg';
import flatWhitesrc from '../images/flat-white.jpg';


const createMenu = () => {
    const main = document.getElementById('main');

    const title = document.createElement("p");
    title.textContent = "Menu";
    const hr = document.createElement("hr");

    const menu = document.createElement("div");
    menu.id = 'menu';

    const latte = document.createElement("div");
    latte.id = 'latte';
    const lattep = document.createElement("p");
    lattep.textContent = "Caffè Latte";
    const latteImg = new Image();
    latteImg.src = lattesrc;
    latte.appendChild(lattep);
    latte.appendChild(latteImg);
    menu.appendChild(latte);

    const mocha = document.createElement("div");
    mocha.id = 'mocha';
    const mochap = document.createElement("p");
    mochap.textContent = "Mocha";
    const mochaImg = new Image();
    mochaImg.src = mochasrc;
    mocha.appendChild(mochap);
    mocha.appendChild(mochaImg);
    menu.appendChild(mocha);

    const cappuccino = document.createElement("div");
    cappuccino.id = 'cappuccino';
    const cappuccinop = document.createElement("p");
    cappuccinop.textContent = "Cappuccino";
    const cappuccinoImg = new Image();
    cappuccinoImg.src = cappuccinosrc;
    cappuccino.appendChild(cappuccinop);
    cappuccino.appendChild(cappuccinoImg);
    menu.appendChild(cappuccino);

    const macchiato = document.createElement("div");
    macchiato.id = 'macchiato';
    const macchiatop = document.createElement("p");
    macchiatop.textContent = "Macchiato";
    const macchiatoImg = new Image();
    macchiatoImg.src = macchiatosrc;
    macchiato.appendChild(macchiatop);
    macchiato.appendChild(macchiatoImg);
    menu.appendChild(macchiato);

    const espresso = document.createElement("div");
    espresso.id = 'espresso';
    const espressop = document.createElement("p");
    espressop.textContent = "Espresso";
    const espressoImg = new Image();
    espressoImg.src = espressosrc;
    espresso.appendChild(espressop);
    espresso.appendChild(espressoImg);
    menu.appendChild(espresso);

    const flatWhite = document.createElement("div");
    flatWhite.id = 'flatWhite';
    const flatWhitep = document.createElement("p");
    flatWhitep.textContent = "Flat White";
    const flatWhiteImg = new Image();
    flatWhiteImg.src = flatWhitesrc;
    flatWhite.appendChild(flatWhitep);
    flatWhite.appendChild(flatWhiteImg);
    menu.appendChild(flatWhite);

    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild(menu);
};

export default createMenu;