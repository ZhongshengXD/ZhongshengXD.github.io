document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Close the hamburger menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove('active');
        }
    });

    // Close the hamburger menu when pressing the Esc key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            navList.classList.remove('active');
        }
    });
});