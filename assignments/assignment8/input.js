// map
 commandToImagePosition = {
    'b': '5% 16%',
    'c': '-94% 87%',
    'p': '-67% 87%',
    'r': '-97% 19%',
    's': '-69% 15%',
    'w': '-38% 26%'
};

 image = document.querySelector('.character-image');

document.querySelector('.command-input').addEventListener('keyup', function(event) {
     command = event.key;

     container = document.getElementById('imageContainer');

    if (command === 'b') {
        container.style.backgroundPosition = commandToImagePosition['b'];
    } else if (command === 'c') {
        container.style.backgroundPosition = commandToImagePosition['c'];
    } else if (command === 'p') {
        container.style.backgroundPosition = commandToImagePosition['p'];
    } else if (command === 'r') {
        container.style.backgroundPosition = commandToImagePosition['r'];
    } else if (command === 's') {
        container.style.backgroundPosition = commandToImagePosition['s'];
    } else if (command === 'w') {
        container.style.backgroundPosition = commandToImagePosition['w'];
    } else {
        container.style.backgroundPosition = '';
    }
});
