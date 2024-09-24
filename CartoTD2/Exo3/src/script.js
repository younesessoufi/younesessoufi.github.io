// Initialisation de la carte
var map = L.map('map').setView([43.7102, 7.2620], 13);  // Coordonnées pour Nice

// Charger une carte OpenStreetMap de base
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

// URL des données GeoJSON pour les communes du département 06
var geojsonUrl = 'https://geo.api.gouv.fr/communes?codeDepartement=06&fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=geojson&geometry=centre';

// Requête AJAX pour récupérer les données GeoJSON et les afficher
fetch(geojsonUrl)
    .then(response => response.json())
    .then(data => {
        // Ajouter les données GeoJSON à la carte
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                // Afficher des informations sur la commune dans un popup
                layer.bindPopup(
                    `<strong>${feature.properties.nom}</strong><br>
                    Code: ${feature.properties.code}<br>
                    Population: ${feature.properties.population}`
                );
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données GeoJSON:', error);
    });
