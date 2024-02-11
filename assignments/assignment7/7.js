currentImage = 1;

function changeImage() {
    imagePath = currentImage === 1 ? "image2.png" : "image1.png";
    document.getElementById('changeable-image').src = imagePath;
    currentImage = currentImage === 1 ? 2 : 1;
}

function rotateImage() {
    slider = document.getElementById('image-rotate-slider');
    rotation = slider.value;
    document.getElementById('rotate-image').style.transform = `rotate(${rotation}deg)`;
}

function addStar() {
    starColumn = document.getElementById('star-column');
    starImage = document.createElement('img');
    starImage.src = 'star.png';
    starImage.style.width = '20px';
    starColumn.appendChild(starImage);
}