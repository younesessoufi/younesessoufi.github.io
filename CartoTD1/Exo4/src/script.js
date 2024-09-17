const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('touchstart', handleTouchEvent);
document.addEventListener('touchmove', handleTouchEvent);
document.addEventListener('touchend', handleTouchEvent);

function handleTouchEvent(event) {
    event.preventDefault(); // Empêche le comportement par défaut (comme le défilement)

    const touch = event.touches[0]; // On prend le premier point de contact
    const type = event.type; // Type d'événement (touchstart, touchmove, touchend)
    const posX = touch.clientX;
    const posY = touch.clientY;

    // Mise à jour des informations affichées
    document.getElementById('eventType').innerText = type;
    document.getElementById('posX').innerText = posX;
    document.getElementById('posY').innerText = posY;

    if (type === 'touchmove') {
        drawCircle(posX, posY);
    }
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI); // Dessine un cercle de rayon 10px
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}
