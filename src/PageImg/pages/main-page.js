import coffee from '../images/coffee-pouring.jpg';

const createMain = () => {
    const content = document.querySelector("#content");
    const main = document.querySelector("#main");

    const img = new Image();
    img.src = coffee;

    const desc = document.createElement("p");
    desc.textContent = "Best coffee in town.";

    main.appendChild(img);
    main.appendChild(desc);
    content.appendChild(main);
}

export default createMain;