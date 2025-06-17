document.addEventListener('DOMContentLoaded', function () {
    // Cambiador de fondos
    const backgrounds = document.querySelectorAll('.background-switcher img');
    const changeBgBtn = document.getElementById('changeBgBtn');
    let currentBg = 0;

    // Mostrar primer fondo
    backgrounds[0].classList.add('active-bg');

    changeBgBtn.addEventListener('click', function () {
        backgrounds[currentBg].classList.remove('active-bg');
        currentBg = (currentBg + 1) % backgrounds.length;
        backgrounds[currentBg].classList.add('active-bg');
    });

    // Animación del nombre
    document.addEventListener('DOMContentLoaded', function () {
        // Animación del nombre
        const nameElement = document.querySelector('.name');
        setInterval(() => {
            nameElement.style.animation = 'none';
            void nameElement.offsetWidth;
            nameElement.style.animation = 'bounce 1.5s infinite';
        }, 1500);
    });
});