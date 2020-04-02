//alert("Hallo Welt!")

let map = document.getElementById('map');

let latitude = map.dataset.lat;
let longitude = map.dataset.lng;
let title = map.dataset.title;

var mymap = L.map('map').setView([latitude, longitude], 10);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>tributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https:/ntopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);

L.marker([latitude, longitude]).addTo(mymap)
    .bindPopup(title).openPopup();
