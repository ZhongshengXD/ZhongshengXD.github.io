document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const ball = document.querySelector('.ball');

    startBtn.addEventListener('click', function () {
        startBtn.style.display = 'none';
        stopBtn.style.display = 'inline';
        ball.style.animation = 'bounce 2s infinite';
    });

    stopBtn.addEventListener('click', function () {
        stopBtn.style.display = 'none';
        startBtn.style.display = 'inline';
        ball.style.animationPlayState = 'paused';
    });
});