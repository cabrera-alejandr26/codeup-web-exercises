"use strict";

function dayTimeHTML(day) {
    var result = new Date(day.dt * 1000).toString();
    // console.log(result);
    var resultArray = result.split(" ");
    // console.log(resultArray);
    var resultObject = {
        day: resultArray[0],
        month: resultArray[1],
        date: resultArray[2],
        year: resultArray[3],
    }
    if (day === 0) {
        resultObject.day = resultObject.day + " (Today)"
    }
    return resultObject;
}



var coordinates = [29.4241200, -98.4936300];


function WeatherApp(){

    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function(resp){
        console.log(resp.daily);

       for(let i = 0; i < resp.daily.length; i++){
           var date = dayTimeHTML(resp.daily[i]);
           var CardDate = date.day + " " + date.month + " " + date.date;
           var Sunrise = new Date (resp.daily[i].sunrise * 1000);
           var Sunset = new Date (resp.daily[i].sunset * 1000);
           var SunriseHour = Sunrise.getHours();
           var SunriseMin = Sunrise.getMinutes();
           var SunsetHour = Sunset.getHours();
           var SunsetMin = Sunset.getMinutes();

           console.log(Sunrise);

           if(i === 0){
               $('.TempC').html("");
             var  heartOfTheCards =  "<div class='card Full Box1'>";
               heartOfTheCards += "<div class='topInfo'>";
               heartOfTheCards += "<h4 class='row justify-content-start'>" + CardDate + "</h4>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].temp.day.toFixed(0) + "&deg" + "F" + "</strong>" + "</p>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].weather[0].description + "</strong>" + "</p>";
               heartOfTheCards += "<img src='' class ='card-img-top'>"
               heartOfTheCards += "</div>";
               heartOfTheCards += "<div class='card-body Card1'>";
               heartOfTheCards += "<ul class='card-text text1 d-flex-column justify-content-start align-items-start'>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Humidity: " + "</strong>" + resp.daily[i].humidity + "</li>";
               heartOfTheCards += "<li class='row '>" + "<strong>" + "Max Temp: " + "</strong>" + resp.daily[i].temp.max +" | " + "<strong>" + "Min Temp: " + "</strong>" + resp.daily[i].temp.min  + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Morning: " + "</strong>" + resp.daily[i].temp.morn + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Evening: " + "</strong>" + resp.daily[i].temp.eve + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Night: " + "</strong>" + resp.daily[i].temp.night + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Sunrise: " + "</strong>" + SunriseHour + ":" + SunriseMin + "am" +  " | " + "<strong>" + "Sunset: " + "</strong>" + SunsetHour + ":" + SunsetMin + "pm" + "</li>";
               heartOfTheCards += "</ul>";
               heartOfTheCards += '</div>';

               heartOfTheCards += "</div>";
           }
           if(i === 1){

               heartOfTheCards =  "<div class='card Full Box2'>";
               heartOfTheCards += "<div class='topInfo'>";
               heartOfTheCards += "<h4 class='row justify-content-start'>" + CardDate + "</h4>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].temp.day.toFixed(0) + "&deg" + "F" + "</strong>" + "</p>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].weather[0].description + "</strong>" + "</p>";
               heartOfTheCards += "<img src='' class ='card-img-top'>"
               heartOfTheCards += "</div>";
               heartOfTheCards += "<div class='card-body Card2'>";
               heartOfTheCards += "<ul class='card-text  text2 d-flex-column justify-content-start align-items-start'>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Humidity: " + "</strong>" + resp.daily[i].humidity + "</li>";
               heartOfTheCards += "<li class='row '>" + "<strong>" + "Max Temp: " + "</strong>" + resp.daily[i].temp.max +" | " + "<strong>" + "Min Temp: " + "</strong>" + resp.daily[i].temp.min  + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Morning: " + "</strong>" + resp.daily[i].temp.morn + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Evening: " + "</strong>" + resp.daily[i].temp.eve + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Night: " + "</strong>" + resp.daily[i].temp.night + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Sunrise: " + "</strong>" + SunriseHour + ":" + SunriseMin + "am" +  " | " + "<strong>" + "Sunset: " + "</strong>" + SunsetHour + ":" + SunsetMin + "pm" + "</li>";
               heartOfTheCards += "</ul>";
               heartOfTheCards += '</div>';

               heartOfTheCards += "</div>";
           }
           if(i === 2){
               heartOfTheCards =  "<div class='card Full Box3'>";
               heartOfTheCards += "<div class='topInfo'>";
               heartOfTheCards += "<h4 class='row justify-content-start'>" + CardDate + "</h4>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].temp.day.toFixed(0) + "&deg" + "F" + "</strong>" + "</p>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].weather[0].description + "</strong>" + "</p>";
               heartOfTheCards += "<img src='' class ='card-img-top'>"
               heartOfTheCards += "</div>";
               heartOfTheCards += "<div class='card-body Card3'>";
               heartOfTheCards += "<ul class='card-text text3 d-flex-column justify-content-start align-items-start'>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Humidity: " + "</strong>" + resp.daily[i].humidity + "</li>";
               heartOfTheCards += "<li class='row '>" + "<strong>" + "Max Temp: " + "</strong>" + resp.daily[i].temp.max +" | " + "<strong>" + "Min Temp: " + "</strong>" + resp.daily[i].temp.min  + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Morning: " + "</strong>" + resp.daily[i].temp.morn + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Evening: " + "</strong>" + resp.daily[i].temp.eve + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Night: " + "</strong>" + resp.daily[i].temp.night + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Sunrise: " + "</strong>" + SunriseHour + ":" + SunriseMin + "am" +  " | " + "<strong>" + "Sunset: " + "</strong>" + SunsetHour + ":" + SunsetMin + "pm" + "</li>";
               heartOfTheCards += "</ul>";
               heartOfTheCards += '</div>';

               heartOfTheCards += "</div>";
           }
           if(i === 3){
               heartOfTheCards =  "<div class='card Full Box4'>";
               heartOfTheCards += "<div class='topInfo'>";
               heartOfTheCards += "<h4 class='row justify-content-start'>" + CardDate + "</h4>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].temp.day.toFixed(0) + "&deg" + "F" + "</strong>" + "</p>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].weather[0].description + "</strong>" + "</p>";
               heartOfTheCards += "<img src='' class ='card-img-top'>"
               heartOfTheCards += "</div>";
               heartOfTheCards += "<div class='card-body Card4'>";
               heartOfTheCards += "<ul class='card-text text4 d-flex-column justify-content-start align-items-start'>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Humidity: " + "</strong>" + resp.daily[i].humidity + "</li>";
               heartOfTheCards += "<li class='row '>" + "<strong>" + "Max Temp: " + "</strong>" + resp.daily[i].temp.max +" | " + "<strong>" + "Min Temp: " + "</strong>" + resp.daily[i].temp.min  + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Morning: " + "</strong>" + resp.daily[i].temp.morn + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Evening: " + "</strong>" + resp.daily[i].temp.eve + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Night: " + "</strong>" + resp.daily[i].temp.night + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Sunrise: " + "</strong>" + SunriseHour + ":" + SunriseMin + "am" +  " | " + "<strong>" + "Sunset: " + "</strong>" + SunsetHour + ":" + SunsetMin + "pm" + "</li>";
               heartOfTheCards += "</ul>";
               heartOfTheCards += '</div>';

               heartOfTheCards += "</div>";
           }
           if(i === 4){
               heartOfTheCards =  "<div class='card Full Box5'>";
               heartOfTheCards += "<div class='topInfo'>";
               heartOfTheCards += "<h4 class='row justify-content-start'>" + CardDate + "</h4>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].temp.day.toFixed(0) + "&deg" + "F" + "</strong>" + "</p>";
               heartOfTheCards += "<p class='row justify-content-start'>" + "<strong>" + resp.daily[i].weather[0].description + "</strong>" + "</p>";
               heartOfTheCards += "<img src='' class ='card-img-top'>"
               heartOfTheCards += "</div>";
               heartOfTheCards += "<div class='card-body Card5'>";
               heartOfTheCards += "<ul class='card-text text5 d-flex-column justify-content-start align-items-start'>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Humidity: " + "</strong>" + resp.daily[i].humidity + "</li>";
               heartOfTheCards += "<li class='row '>" + "<strong>" + "Max Temp: " + "</strong>" + resp.daily[i].temp.max +" | " + "<strong>" + "Min Temp: " + "</strong>" + resp.daily[i].temp.min  + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Morning: " + "</strong>" + resp.daily[i].temp.morn + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Evening: " + "</strong>" + resp.daily[i].temp.eve + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Night: " + "</strong>" + resp.daily[i].temp.night + "</li>";
               heartOfTheCards += "<li class='row'>" + "<strong>" + "Sunrise: " + "</strong>" + SunriseHour + ":" + SunriseMin + "am" +  " | " + "<strong>" + "Sunset: " + "</strong>" + SunsetHour + ":" + SunsetMin + "pm" + "</li>";
               heartOfTheCards += "</ul>";
               heartOfTheCards += '</div>';

               heartOfTheCards += "</div>";
           }
           $('.TempC').append(heartOfTheCards);

           if(i === 4){
               break;
           }
       }

        function actions(){
            function action1(){
                $('.Box1').hover(function(){
                        $(this).css({'height' : '27rem'});
                        $('.Card1').css({'visibility' : 'visible'});
                        $('.text1').css({'visibility' : 'visible'});
                    },
                    function(){
                        $(this).css({'height' : '8rem'});
                        $('.Card1').css({'visibility' : 'hidden'});
                        $('.text1').css({'visibility' : 'hidden'});
                    })

            }action1();

            function action2(){
                $('.Box2').hover(function(){
                        $(this).css({'height' : '27rem'});
                        $('.Card2').css({'visibility' : 'visible'});
                        $('.text2').css({'visibility' : 'visible'});
                    },
                    function(){
                        $(this).css({'height' : '8rem'});
                        $('.Card2').css({'visibility' : 'hidden'});
                        $('.text2').css({'visibility' : 'hidden'});
                    })

            }action2();

            function action3(){
                $('.Box3').hover(function(){
                        $(this).css({'height' : '27rem'});
                        $('.Card3').css({'visibility' : 'visible'});
                        $('.text3').css({'visibility' : 'visible'});
                    },
                    function(){
                        $(this).css({'height' : '8rem'});
                        $('.Card3').css({'visibility' : 'hidden'});
                        $('.text3').css({'visibility' : 'hidden'});
                    })

            }action3();

            function action4(){
                $('.Box4').hover(function(){
                        $(this).css({'height' : '27rem'});
                        $('.Card4').css({'visibility' : 'visible'});
                        $('.text4').css({'visibility' : 'visible'});
                    },
                    function(){
                        $(this).css({'height' : '8rem'});
                        $('.Card4').css({'visibility' : 'hidden'});
                        $('.text4').css({'visibility' : 'hidden'});
                    })

            }action4();

            function action5(){
                $('.Box5').hover(function(){
                        $(this).css({'height' : '27rem'});
                        $('.Card5').css({'visibility' : 'visible'});
                        $('.text5').css({'visibility' : 'visible'});
                    },
                    function(){
                        $(this).css({'height' : '8rem'});
                        $('.Card5').css({'visibility' : 'hidden'});
                        $('.text5').css({'visibility' : 'hidden'});
                    })

            }action5();


        }
        actions();

    })//some data will have to be removed later on
}
WeatherApp();




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
        zoom: 10,
        speed: 1,
    })
}, 500);

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




var pushingCord = marker.on('dragend', function () {
    // $('h1').html(marker.getLngLat().toString());
    // var stringVal = marker.getLngLat().toString().replace("LngLat",'').replace("(",'').replace(")",'');
    var stringVal = marker.getLngLat();

    // var namesArray = stringVal.split(' , ');
    // let floatedVal = parseFloat(namesArray);

    var theLong = stringVal.lng.toFixed(7);
    var longEX = parseFloat(theLong);

    var theLat = stringVal.lat.toFixed(7);
    var latEX = parseFloat(theLat);


    coordinates = [latEX, longEX];

    WeatherApp(coordinates);







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
        marker.setLngLat(newCenter);//Update the coordinate
        popup.setHTML('<h3 class="font">' + userInput + '</h3>');
        map.flyTo({center: newCenter});
    });
});


// var coordinates = [];
// // coordinates.push(pushingCord);
console.log(coordinates);
