// Vérifier si la géolocalisation est disponible
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        // Initialiser la carte centrée sur la position de l'utilisateur
        const map = L.map('map').setView([userLat, userLng], 13);

        // Ajouter les tuiles OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Ajouter un marqueur sur la position de l'utilisateur
        L.marker([userLat, userLng]).addTo(map)
            .bindPopup('Vous êtes ici.')
            .openPopup();

        // Ajouter un marqueur sur le centre-ville de Nice
        const niceLat = 43.7102;
        const niceLng = 7.2620;
        L.marker([niceLat, niceLng]).addTo(map)
            .bindPopup('Centre-ville de Nice')
            .openPopup();
    });
} else {
    alert("La géolocalisation n'est pas supportée par ce navigateur.");
}
