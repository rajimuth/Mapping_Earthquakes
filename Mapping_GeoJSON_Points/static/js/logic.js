// Add console.log to check to see if our code is working.
console.log("working");

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Grabbing our GeoJSON data.
//  adding popup using pointToLayer
L.geoJSON(sanFranAirport,{
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        .bindPopup("<h2>" + "Airport Code:" + feature.properties.city + "</h2>"+"<h3>" +"Airport Name:" + feature.properties.name + "</h3>");
        }
        
})
.addTo(map);


// Grabbing our GeoJSON data.
//  adding popup using onEachFeauture
// L.geoJSON(sanFranAirport,{ 
//     onEachFeature:function(feature, layer){
//     console.log(layer);
//     layer.bindPopup(feature.properties.city);
// }    
// }).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 50,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Add markers to map for Los Angeles, California.
// var marker = L.marker ([34.0522, -118.2437]).addTo(map);

//  Changing the marker to circle
// L.circleMarker([34.0522, -118.2437],{
//     radius :10,
//     color:"yellow",
//     fillcolor:"#7ff000"
//     }).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);