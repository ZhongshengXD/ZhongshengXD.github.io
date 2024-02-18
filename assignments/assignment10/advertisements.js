// Part 1
let advertisements = [
    "Sale - Up to 50% off!",
    "Free shipping on orders over $50",
    "New arrivals are now in stock",
    "Sign up for our newsletter and get 10% off",
    "Exclusive online-only offers"
];

let currentAdIndex = 0;
const adElement = document.getElementById('advertisement');

function displayNextAdvertisement() {
    adElement.textContent = advertisements[currentAdIndex];
    currentAdIndex = (currentAdIndex + 1) % advertisements.length;
}

displayNextAdvertisement();


setInterval(displayNextAdvertisement, 2000);

// Part 2 
let images = [
    { src: "images/1.png", attribution: "Image by Artist 1 on Freepik", link: "images/1.png" },
    { src: "images/2.jpg", attribution: "Image by Artist 2 on Freepik", link: "images/2.jpg" },
    { src: "images/3.jpg", attribution: "Image by Artist 3 on Freepik", link: "images/3.jpg" },
    { src: "images/4.jpg", attribution: "Image by Artist 4 on Freepik", link: "images/4.jpg" },
    { src: "images/5.jpg", attribution: "Image by Artist 5 on Freepik", link: "images/5.jpg" },
];


const imagesContainer = document.getElementById('image-container');

images.forEach(image => {
    let imageSection = document.createElement('div');
    imageSection.className = 'image-section';

    let imageElement = document.createElement('img');
    imageElement.src = image.src;
    imageElement.alt = image.attribution;
    imageElement.className = 'image';
    imageElement.style.width = '400px';
    imageElement.style.height = '300px';
    imageElement.style.objectFit = 'cover';
    imageElement.style.aspectRatio = '400 / 300';

    let attributionElement = document.createElement('p');
    attributionElement.className = 'attribution';

    let sourceText = document.createTextNode(`on Internet`);

    let linkElement = document.createElement('a');
    linkElement.href = image.link; 
    linkElement.textContent = image.attribution; 
    linkElement.target = "_blank";

    attributionElement.appendChild(linkElement);
    attributionElement.appendChild(sourceText);

    imageSection.appendChild(imageElement);
    imageSection.appendChild(attributionElement);

    imagesContainer.appendChild(imageSection);
});