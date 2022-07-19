const createAbout = () => {
    const main = document.getElementById('main');

    const title = document.createElement('p');
    title.textContent = 'About us';

    const hr = document.createElement('hr');

    const aboutDiv = document.createElement('div');
    aboutDiv.id = 'about-div';

    const about = document.createElement('p');
    about.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada erat eu dolor cursus, id condimentum tortor ultrices. Ut a mi nunc. Cras aliquam nibh non efficitur faucibus. Donec sit amet nisl tempus, accumsan risus blandit, aliquam enim. Mauris dictum nisl odio, et sodales dui lacinia vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam non diam consequat, condimentum neque ut, cursus justo. Suspendisse facilisis justo quis dui sollicitudin mollis. Morbi ut faucibus sem.';
    about.id = 'about-text';

    aboutDiv.appendChild(about);
    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild(aboutDiv);
}

export default createAbout;