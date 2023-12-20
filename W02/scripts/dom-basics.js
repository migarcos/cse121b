const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.setAttribute('src', 'https://picsum.photos/200');
newImg.setAttribute('alt', 'practicing how to apped a img with js');
document.body.appendChild(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// --- Insertion DIV ---
const newSection = document.createElement("div");

const newH2 = document.createElement("h2");
newH2.innerText = "CS 121b";
const newP = document.createElement("p");
newP.innerText = "Welcome to Javascript  Language";

newSection.appendChild(newH2);
newSection.appendChild(newP);

document.body.appendChild(newSection);

