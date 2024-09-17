


function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude || "Non disponible";
    const accuracy = position.coords.accuracy;
    const speed = position.coords.speed || "Non disponible";
    const timestamp = new Date(position.timestamp);

    document.getElementById("latitude").innerText = latitude;
    document.getElementById("longitude").innerText = longitude;
    document.getElementById("altitude").innerText = altitude;
    document.getElementById("accuracy").innerText = accuracy + " mètres";
    document.getElementById("speed").innerText = speed + " m/s";
    document.getElementById("timestamp").innerText = timestamp.toLocaleString();
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("L'utilisateur a refusé la demande de géolocalisation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Les informations de localisation sont indisponibles.");
            break;
        case error.TIMEOUT:
            alert("La demande de localisation a expiré.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Une erreur inconnue s'est produite.");
            break;
    }
}
