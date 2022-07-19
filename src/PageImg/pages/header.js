const createHeader =  () => {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.id = "header";
    
    const logo = document.createElement("p");
    logo.textContent = "SoftoBiz Cafe";
    logo.classList.add("logo");
    
    const hr = document.createElement("hr");

    const slogan = document.createElement("p");
    slogan.textContent = "SoftoBiz Technologies (P) LTD";
    slogan.classList.add("slogan");

    header.appendChild(logo);
    header.appendChild(hr);
    header.appendChild(slogan);

    content.appendChild(header); 
}

export default createHeader;