
// START POSITION IN THE MAP
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
    center: [-98.48852, 29.41725], // starting position [lng, lat]//NewYork
    zoom: 4 // starting zoom
});

// ADD MOVEMENT FROM NY TO FAVORITE RESTAURANT
setTimeout(function () {
    map.flyTo({
        center: [-98.48852, 29.41725],//San Antonio
        zoom: 15,
        speed: 1,
    })
}, 1000);

// ADD ZOOM AND ROTATION CONTROLS TO THE MAP
map.addControl(new mapboxgl.NavigationControl());

// MARKER OBJECTS SET OPTIONS
var marker = new mapboxgl.Marker({
    color: "red",
})
    .setLngLat([-98.48852, 29.41725])
    .addTo(map)
    .setDraggable(true);

// INSTANTIATION OF POPUPS OBJECT
var popup = new mapboxgl.Popup()
    .setLngLat(marker.getLngLat())
    .setHTML("<h4>You are Here!</h4>")
    .setMaxWidth("100")
    .addTo(map);

//  SHOW THE COORDINATES


marker.on('dragend', function () {
    $('h1').html(marker.getLngLat().toString());
    coordinates.push(marker.getLngLat());

    //  WHEN DRAG THE MOUSE, REMOVE THE POPUP
    marker.setPopup();
});

// YOU CAN DO THIS TOO
marker.setPopup(popup);
popup.addClassName('popup-font')

// SHOW THE COORDINATES WHEN YOU PASS AN ADDRESS
geocode('San Antonio', MAPBOX_ACCESS_TOKEN).then(function (results) {
    console.log(results);
});

// SHOW THE ADDRESS COORDINATES
reverseGeocode({lng: -96.79, Lat: 32.77}, MAPBOX_ACCESS_TOKEN).then(function (results) {
    console.log(results);
});

// HERE ENTER THE NAME IN A BUTTON FOR LOOKING FOR THE SPECIFIC ADDRESS

$("#btn").click(function () {
    var userInput = $("#input").val();
    geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (info) {
        console.log(info);
        var newCenter = {
            lng: info[0],
            lat: info[1]
        };
        marker.setLngLat(newCenter);
        popup.setHTML('<h3 class="font">' + userInput + '</h3>');
        map.flyTo({center: newCenter});
    });
});

