// Part 1
let advertisements = [
    "gardening is good for your health",
    "gloden hour is the best time to take photos",
    "mountain lakes are the best places to relax",
    "small houses are the best places to live",
    "snow is the best thing to see in the winter"
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
    { src: "images/garden.jpg", attribution: "Image by vecstock", link: "https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7" },
    { src: "images/golden.jpg", attribution: "Image by wirestock", link: "https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" },
    { src: "images/mountain-lake.jpg", attribution: "Image by wirestock", link: "https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" },
    { src: "images/small-house.jpg", attribution: "Image by wirestock", link: "https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" },
    { src: "images/snow.jpg", attribution: "Image by wirestock", link: "https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" }
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