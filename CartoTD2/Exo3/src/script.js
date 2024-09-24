// Initialisation de la carte
var map = L.map('map').setView([43.7102, 7.2620], 13);  // Coordonnées pour Nice

// Charger une carte OpenStreetMap de base
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

// URL des données GeoJSON (exemple pris sur un site d'open data)
var geojsonUrl = 'http://opendata.nicecotedazur.org/data/storage/f/2024-09-24T06:04:44.904Z/entries-visites.json';

// Requête AJAX pour récupérer les données GeoJSON et les afficher
fetch(geojsonUrl)
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);  // Ajoute les données GeoJSON à la carte
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données GeoJSON:', error);
    });

