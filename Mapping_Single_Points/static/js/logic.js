// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 7);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 50,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Add markers to map for Los Angeles, California.
// var marker = L.marker ([34.0522, -118.2437]).addTo(map);

//  Changing the marker to circle
L.circleMarker([34.0522, -118.2437],{
    radius :10,
    color:"yellow",
    fillcolor:"#7ff000"
    }).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);