document.querySelector('.menu-icon').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        this.textContent = '▲';
    } else {
        menu.classList.add('hidden');
        this.textContent = '▼';
    }
});

document.getElementById('exercise1').addEventListener('click', function () {
    document.querySelector('.content-container').style.display = 'block';
    document.querySelector('.slide-photo').style.display = 'none';
});

document.getElementById('exercise2').addEventListener('click', function () {
    document.querySelector('.content-container').style.display = 'none';
    document.querySelector('.slide-photo').style.display = 'block';
});