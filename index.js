
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const respuesta = document.getElementById('respuesta');


yesBtn.addEventListener('click', function () {
    respuesta.textContent = '¡Sí! 💖 Gracias por hacerme la persona más feliz del mundo. ¡Te amo!';
    respuesta.className = 'respuesta-visible';
    lanzarCorazones();
    mostrarPergamino();
});

function mostrarPergamino() {
    const pergamino = document.getElementById('pergamino');
    pergamino.className = 'pergamino-visible';
    const cerrarBtn = document.getElementById('cerrarPergamino');
    cerrarBtn.onclick = function() {
        pergamino.className = 'pergamino-oculto';
    };
}

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
});

// Animación de corazones flotando
function lanzarCorazones() {
    for (let i = 0; i < 30; i++) {
        crearCorazon();
    }
}

function crearCorazon() {
    const heartsBg = document.querySelector('.hearts-background');
    const heart = document.createElement('div');
    heart.className = 'corazon-animado';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heartsBg.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Crear corazones animados con CSS
const style = document.createElement('style');
style.textContent = `
.corazon-animado {
    position: fixed;
    bottom: 0;
    font-size: 2.5em;
    color: #e75480;
    animation: flotar 3s linear forwards;
    pointer-events: none;
    z-index: 10;
}
@keyframes flotar {
    0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-100vh) scale(1.3) rotate(30deg); opacity: 0; }
}
.corazon-animado::before {
    content: '💖';
}
`;
document.head.appendChild(style);