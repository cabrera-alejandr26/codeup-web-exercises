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

function Card1(today){
    var TODAY = dayTimeHTML(today);
    var Today1 = TODAY.day + " " + TODAY.month + " " + TODAY.date + " " + TODAY.year;
    var Today2 = TODAY.day + " " + TODAY.month + " " + TODAY.date + " ";
    var todayTemp = today.temp.day;

    $('#today1').html(Today2);
    $('#todayTemp').html(todayTemp.toFixed(0) + "&deg" + "F");
    $('#description1').html(today.weather[0].description);
    function theStats (){
        $('.card-text1').html("<li> Humidity: " + today.humidity + "% </li><li> Max: " + today.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + today.temp.min.toFixed(0) + "&deg" +
            "F </li><li> Morning: " + today.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
            "<li> Day: " + today.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + today.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
    }
    theStats();
}
Card1();

function Card2(tomorrow){

    var DAY2 = dayTimeHTML(tomorrow);
    var Day2 = DAY2.day + " " + DAY2.month + " " + DAY2.date;
    $('#tomorrow').html(Day2);
    $('#tomorrowTemp').html(tomorrowTemp.toFixed(0) + "&deg" + "F");
    $('#description2').html(tomorrow.weather[0].description);
    function theStats (){
        $('.card-text2').html("<li> Humidity: " + tomorrow.humidity + "% </li><li> Max: " + today.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + tomorrow.temp.min.toFixed(0) + "&deg" +
            "F </li><li> Morning: " + tomorrow.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
            "<li> Day: " + tomorrow.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + tomorrow.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
    }
    theStats();
}
Card2();

function Card3(){


    $('#dayAfter').html(Day3);
    $('#afterTemp').html(afterTemp.toFixed(0) + "&deg" + "F");
    $('#description3').html(dayAfter.weather[0].description);
    function theStats (){
        $('.card-text3').html("<li> Humidity: " + dayAfter.humidity + "% </li><li> Max: " + dayAfter.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + dayAfter.temp.min.toFixed(0) + "&deg" +
            "F </li><li> Morning: " + dayAfter.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
            "<li> Day: " + dayAfter.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + dayAfter.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
    }
    theStats();
}
Card3();

function Card4(){


    $('#dayFour').html(Day4);
    $('#dayfourTemp').html(fourthTemp.toFixed(0) + "&deg" + "F");
    $('#description4').html(day4.weather[0].description);
    function theStats (){
        $('.card-text4').html("<li> Humidity: " + day4.humidity + "% </li><li> Max: " + day4.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + day4.temp.min.toFixed(0) + "&deg" +
            "F </li><li> Morning: " + day4.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
            "<li> Day: " + day4.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + day4.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
    }
    theStats();
}
Card4();

function Card5(){


    $('#dayFive').html(Day5);
    $('#dayfiveTemp').html(fifthTemp.toFixed(0) + "&deg" + "F");
    $('#description5').html(day5.weather[0].description);
    function theStats (){
        $('.card-text5').html("<li> Humidity: " + day5.humidity + "% </li><li> Max: " + day5.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + day5.temp.min.toFixed(0) + "&deg" +
            "F </li><li> Morning: " + day5.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
            "<li> Day: " + day5.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + day5.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
    }
    theStats();
}
Card5();
//Global Variable



var coordinates = [29.4241200, -98.4936300];


function WeatherApp(){

    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function(resp){
        console.log(resp);

        // function reverseGeocode(coordinates, token) {
        //     var baseUrl = 'https://api.mapbox.com';
        //     var endPoint = '/geocoding/v5/mapbox.places/';
        //     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        //         .then(function (res) {
        //             return res.json();
        //         })
        //         // to get all the data from the request, comment out the following three lines...
        //         .then(function (data) {
        //             return data.features[0].place_name;
        //         });
        // }

        //Current Temp
        var feelsLikeToday = resp.current.feels_like;
        var actualTemp = resp.current.temp;


        //Daily Weather
        //For Looping
        var today = resp.daily[0];
        var tomorrow = resp.daily[1];
        var dayAfter = resp.daily[2];
        var day4 = resp.daily[3];
        var day5 = resp.daily[4];




        //Date & Time


        var DAY3 = dayTimeHTML(dayAfter);
        var Day3 = DAY3.day + " " + DAY3.month + " " + DAY3.date;

        var DAY4 = dayTimeHTML(day4);
        var Day4 = DAY4.day + " " + DAY4.month + " " + DAY4.date;

        var DAY5 = dayTimeHTML(day5);
        var Day5 = DAY5.day + " " + DAY5.month + " " + DAY5.date;





        //Temperatures

        var tomorrowTemp = tomorrow.temp.day;
        var afterTemp = dayAfter.temp.day;
        var fourthTemp = day4.temp.day;
        var fifthTemp = day5.temp.day;

        //Actual temp
        // $('#location').html(Location);
        $('#today').html(Today1);
        $('#currentTemp').html("Temperature: " + actualTemp.toFixed(0) + "&deg" + "F" + "<br>" + "Feels Like: " + feelsLikeToday.toFixed(0) + "&deg" + "F");

        //Humidity


        //Temp Cards



    })//some data will have to be removed later on
}


function actions(){
    function action1(){
        $('.card1').hover(function(){
                $(this).css({'height' : '20rem'});
                $('.cardOne').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }function action2(){
        $('.card2').hover(function(){
                $(this).css({'height' : '20rem'});
                $('.cardTwo').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }function action3(){
        $('.card3').hover(function(){
                $(this).css({'height' : '20rem'});
                $('.cardThree').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }function action4(){
        $('.card4').hover(function(){
                $(this).css({'height' : '20rem'});
                $('.cardFour').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }function action5(){
        $('.card5').hover(function(){
                $(this).css({'height' : '20rem'});
                $('.cardFive').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }

    action1();
    action2();
    action3();
    action4();
    action5();
}

actions();
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


    var coordinates = [latEX, longEX];


    function WeatherApp(){

        $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=hourly,minutely&appid=" + WEATHER_MAP_TOKEN).done(function(resp){
            console.log(resp);

            // function reverseGeocode(coordinates, token) {
            //     var baseUrl = 'https://api.mapbox.com';
            //     var endPoint = '/geocoding/v5/mapbox.places/';
            //     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            //         .then(function (res) {
            //             return res.json();
            //         })
            //         // to get all the data from the request, comment out the following three lines...
            //         .then(function (data) {
            //             return data.features[0].place_name;
            //         });
            // }

            //Current Temp
            var feelsLikeToday = resp.current.feels_like;
            var actualTemp = resp.current.temp;


            //Daily Weather
            var today = resp.daily[0];
            var tomorrow = resp.daily[1];
            var dayAfter = resp.daily[2];
            var day4 = resp.daily[3];
            var day5 = resp.daily[4];


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

            //Date & Time
            var TODAY = dayTimeHTML(today);
            var Today1 = TODAY.day + " " + TODAY.month + " " + TODAY.date + " " + TODAY.year;
            var Today2 = TODAY.day + " " + TODAY.month + " " + TODAY.date + " ";

            var DAY2 = dayTimeHTML(tomorrow);
            var Day2 = DAY2.day + " " + DAY2.month + " " + DAY2.date;

            var DAY3 = dayTimeHTML(dayAfter);
            var Day3 = DAY3.day + " " + DAY3.month + " " + DAY3.date;

            var DAY4 = dayTimeHTML(day4);
            var Day4 = DAY4.day + " " + DAY4.month + " " + DAY4.date;

            var DAY5 = dayTimeHTML(day5);
            var Day5 = DAY5.day + " " + DAY5.month + " " + DAY5.date;





            //Temperatures
            var todayTemp = today.temp.day;
            var tomorrowTemp = tomorrow.temp.day;
            var afterTemp = dayAfter.temp.day;
            var fourthTemp = day4.temp.day;
            var fifthTemp = day5.temp.day;

            //Actual temp
            // $('#location').html(Location);
            $('#today').html(Today1);
            $('#currentTemp').html("Temperature: " + actualTemp.toFixed(0) + "&deg" + "F" + "<br>" + "Feels Like: " + feelsLikeToday.toFixed(0) + "&deg" + "F");

            //Humidity


            //Temp Cards

            function Card1(){


                $('#today1').html(Today2);
                $('#todayTemp').html(todayTemp.toFixed(0) + "&deg" + "F");
                $('#description1').html(today.weather[0].description);
                function theStats (){
                    $('.card-text1').html("<li> Humidity: " + today.humidity + "% </li><li> Max: " + today.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + today.temp.min.toFixed(0) + "&deg" +
                        "F </li><li> Morning: " + today.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
                        "<li> Day: " + today.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + today.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
                }
                theStats();
            }
            Card1();

            function Card2(){


                $('#tomorrow').html(Day2);
                $('#tomorrowTemp').html(tomorrowTemp.toFixed(0) + "&deg" + "F");
                $('#description2').html(tomorrow.weather[0].description);
                function theStats (){
                    $('.card-text2').html("<li> Humidity: " + tomorrow.humidity + "% </li><li> Max: " + today.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + tomorrow.temp.min.toFixed(0) + "&deg" +
                        "F </li><li> Morning: " + tomorrow.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
                        "<li> Day: " + tomorrow.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + tomorrow.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
                }
                theStats();
            }
            Card2();

            function Card3(){


                $('#dayAfter').html(Day3);
                $('#afterTemp').html(afterTemp.toFixed(0) + "&deg" + "F");
                $('#description3').html(dayAfter.weather[0].description);
                function theStats (){
                    $('.card-text3').html("<li> Humidity: " + dayAfter.humidity + "% </li><li> Max: " + dayAfter.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + dayAfter.temp.min.toFixed(0) + "&deg" +
                        "F </li><li> Morning: " + dayAfter.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
                        "<li> Day: " + dayAfter.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + dayAfter.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
                }
                theStats();
            }
            Card3();

            function Card4(){


                $('#dayFour').html(Day4);
                $('#dayfourTemp').html(fourthTemp.toFixed(0) + "&deg" + "F");
                $('#description4').html(day4.weather[0].description);
                function theStats (){
                    $('.card-text4').html("<li> Humidity: " + day4.humidity + "% </li><li> Max: " + day4.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + day4.temp.min.toFixed(0) + "&deg" +
                        "F </li><li> Morning: " + day4.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
                        "<li> Day: " + day4.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + day4.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
                }
                theStats();
            }
            Card4();

            function Card5(){


                $('#dayFive').html(Day5);
                $('#dayfiveTemp').html(fifthTemp.toFixed(0) + "&deg" + "F");
                $('#description5').html(day5.weather[0].description);
                function theStats (){
                    $('.card-text5').html("<li> Humidity: " + day5.humidity + "% </li><li> Max: " + day5.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + day5.temp.min.toFixed(0) + "&deg" +
                        "F </li><li> Morning: " + day5.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
                        "<li> Day: " + day5.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + day5.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
                }
                theStats();
            }
            Card5();


        })//some data will have to be removed later on
    }

    WeatherApp();




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
