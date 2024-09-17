// Vérification si le navigateur supporte DeviceOrientation et DeviceMotion
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation);
} else {
    alert("L'API DeviceOrientation n'est pas supportée par ce navigateur.");
}

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', handleMotion);
} else {
    alert("L'API DeviceMotion n'est pas supportée par ce navigateur.");
}

function handleOrientation(event) {
    // Orientation du smartphone
    const alpha = event.alpha; // Rotation autour de l'axe Z
    const beta = event.beta;   // Inclinaison autour de l'axe X
    const gamma = event.gamma; // Inclinaison autour de l'axe Y

    document.getElementById('alpha').innerText = alpha.toFixed(2);
    document.getElementById('beta').innerText = beta.toFixed(2);
    document.getElementById('gamma').innerText = gamma.toFixed(2);
}

function handleMotion(event) {
    // Accélération en translation
    const accelerationX = event.acceleration.x || 0;
    const accelerationY = event.acceleration.y || 0;
    const accelerationZ = event.acceleration.z || 0;

    // Accélération en rotation
    const rotationAlpha = event.rotationRate.alpha || 0;
    const rotationBeta = event.rotationRate.beta || 0;
    const rotationGamma = event.rotationRate.gamma || 0;

    document.getElementById('accelerationX').innerText = accelerationX.toFixed(2);
    document.getElementById('accelerationY').innerText = accelerationY.toFixed(2);
    document.getElementById('accelerationZ').innerText = accelerationZ.toFixed(2);
    document.getElementById('rotationAlpha').innerText = rotationAlpha.toFixed(2);
    document.getElementById('rotationBeta').innerText = rotationBeta.toFixed(2);
    document.getElementById('rotationGamma').innerText = rotationGamma.toFixed(2);
}
