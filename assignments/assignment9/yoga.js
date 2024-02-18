let images = [
    { src: 'images/yoga1.jpg', text: 'downward dog' },
    { src: 'images/yoga2.jpg', text: 'warrior 1' },
    { src: 'images/yoga3.jpg', text: 'warrior 2' },
    { src: 'images/yoga4.jpg', text: 'warrior 3' },
    { src: 'images/yoga5.jpg', text: 'tree' },
    { src: 'images/yoga6.jpg', text: 'child\'s pose' },
    { src: 'images/yoga7.jpg', text: 'pigeon' },
    { src: 'images/yoga8.jpg', text: 'cobra' },
];

let container = document.getElementById('slideImageContainer');

images.forEach(function(image) {
    let img = document.createElement('img');
    img.src = image.src;
    img.alt = image.text;
    img.addEventListener('click', function() {

        let p = document.getElementById('imgContent');
        p.textContent = image.text;
    });
    container.appendChild(img);
});