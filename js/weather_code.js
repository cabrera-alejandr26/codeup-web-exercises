"use strict";

//Global Variable



// var coordinates = [];
//
//
// function WeatherApp(){
//
//     $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0].lat + "&lon=" + coordinates[0].lng + "&appid=" + WEATHER_MAP_TOKEN).done(function(resp){
//         console.log(resp);
//         //Current Temp
//         var feelsLikeToday = resp.current.feels_like;
//         var actualTemp = resp.current.temp;
//
//         //Daily Weather
//         var today = resp.daily[0];
//         var tomorrow = resp.daily[1];
//         var dayAfter = resp.daily[2];
//         var day4 = resp.daily[3];
//         var day5 = resp.daily[4];
//
//         //Date & Time
//         var todayDate= new Date(resp.current.dt*1000).toString();//Current Time
//         var todayDate2 = new Date(today.dt*1000).toString();
//         var tomorrowDate= new Date(tomorrow.dt*1000).toString();
//         var dayAfterDate= new Date(dayAfter.dt*1000).toString();
//         var day4Date= new Date(day4.dt*1000).toString();
//         var day5Date= new Date(day5.dt*1000).toString();
//
//         var currentDate = todayDate.replace('GMT-0500 (Central Daylight Time)','');
//         var TodayDate = todayDate2.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
//         var ToDate = tomorrowDate.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
//         var afterDate = dayAfterDate.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
//         var fourthDate = day4Date.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
//         var fifthDate = day5Date.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
//
//         //Temperatures
//         var tomorrowTemp = tomorrow.temp.day;
//         var afterTemp = dayAfter.temp.day;
//         var todayTemp = today.temp.day;
//         var fourthTemp = day4.temp.day;
//         var fifthTemp = day5.temp.day;
//
//         //Actual temp
//         $('#today').html(currentDate);
//         $('#currentTemp').html("Temperature: " + actualTemp + "&deg" + "F" + "<br>" + "Feels Like: " + feelsLikeToday + "&deg" + "F");
//
//         //Humidity
//
//
//         //Temp Cards
//
//         function Card1(){
//
//
//             $('#today1').html(TodayDate);
//             $('#todayTemp').html(todayTemp.toFixed(0) + "&deg" + "F");
//             $('#description1').html(today.weather[0].description);
//             function theStats (){
//                 $('.card-text1').html("<li> Humidity: " + today.humidity + "% </li><li> Max: " + today.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + today.temp.min.toFixed(0) + "&deg" +
//                     "F </li><li> Morning: " + today.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
//                     "<li> Day: " + today.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + today.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
//             }
//             theStats();
//         }
//         Card1();
//
//         function Card2(){
//
//
//             $('#tomorrow').html(ToDate);
//             $('#tomorrowTemp').html(tomorrowTemp.toFixed(0) + "&deg" + "F");
//             $('#description2').html(tomorrow.weather[0].description);
//             function theStats (){
//                 $('.card-text2').html("<li> Humidity: " + tomorrow.humidity + "% </li><li> Max: " + today.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + tomorrow.temp.min.toFixed(0) + "&deg" +
//                     "F </li><li> Morning: " + tomorrow.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
//                     "<li> Day: " + tomorrow.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + tomorrow.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
//             }
//             theStats();
//         }
//         Card2();
//
//         function Card3(){
//
//
//             $('#dayAfter').html(afterDate);
//             $('#afterTemp').html(afterTemp.toFixed(0) + "&deg" + "F");
//             $('#description3').html(dayAfter.weather[0].description);
//             function theStats (){
//                 $('.card-text3').html("<li> Humidity: " + dayAfter.humidity + "% </li><li> Max: " + dayAfter.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + dayAfter.temp.min.toFixed(0) + "&deg" +
//                     "F </li><li> Morning: " + dayAfter.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
//                     "<li> Day: " + dayAfter.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + dayAfter.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
//             }
//             theStats();
//         }
//         Card3();
//
//         function Card4(){
//
//
//             $('#dayFour').html(fourthDate);
//             $('#dayfourTemp').html(fourthTemp.toFixed(0) + "&deg" + "F");
//             $('#description4').html(day4.weather[0].description);
//             function theStats (){
//                 $('.card-text4').html("<li> Humidity: " + day4.humidity + "% </li><li> Max: " + day4.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + day4.temp.min.toFixed(0) + "&deg" +
//                     "F </li><li> Morning: " + day4.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
//                     "<li> Day: " + day4.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + day4.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
//             }
//             theStats();
//         }
//         Card4();
//
//         function Card5(){
//
//
//             $('#dayFive').html(fifthDate);
//             $('#dayfiveTemp').html(fifthTemp.toFixed(0) + "&deg" + "F");
//             $('#description5').html(day5.weather[0].description);
//             function theStats (){
//                 $('.card-text5').html("<li> Humidity: " + day5.humidity + "% </li><li> Max: " + day5.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + day5.temp.min.toFixed(0) + "&deg" +
//                     "F </li><li> Morning: " + day5.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
//                     "<li> Day: " + day5.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + day5.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
//             }
//             theStats();
//         }
//         Card5();
//
//
//     })//some data will have to be removed later on
// }


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
// WeatherApp();


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


    var coordinates = [theLat, theLong];


    function WeatherApp(){

        $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&appid=" + WEATHER_MAP_TOKEN).done(function(resp){
            console.log(resp);
            //Current Temp
            var feelsLikeToday = resp.current.feels_like;
            var actualTemp = resp.current.temp;

            //Daily Weather
            var today = resp.daily[0];
            var tomorrow = resp.daily[1];
            var dayAfter = resp.daily[2];
            var day4 = resp.daily[3];
            var day5 = resp.daily[4];

            //Date & Time
            var todayDate= new Date(resp.current.dt*1000).toString();//Current Time
            var todayDate2 = new Date(today.dt*1000).toString();
            var tomorrowDate= new Date(tomorrow.dt*1000).toString();
            var dayAfterDate= new Date(dayAfter.dt*1000).toString();
            var day4Date= new Date(day4.dt*1000).toString();
            var day5Date= new Date(day5.dt*1000).toString();

            var currentDate = todayDate.replace('GMT-0500 (Central Daylight Time)','');
            var TodayDate = todayDate2.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
            var ToDate = tomorrowDate.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
            var afterDate = dayAfterDate.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
            var fourthDate = day4Date.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');
            var fifthDate = day5Date.replace('2021 13:00:00 GMT-0500 (Central Daylight Time)','');

            //Temperatures
            var tomorrowTemp = tomorrow.temp.day;
            var afterTemp = dayAfter.temp.day;
            var todayTemp = today.temp.day;
            var fourthTemp = day4.temp.day;
            var fifthTemp = day5.temp.day;

            //Actual temp
            $('#today').html(currentDate);
            $('#currentTemp').html("Temperature: " + actualTemp + "&deg" + "F" + "<br>" + "Feels Like: " + feelsLikeToday + "&deg" + "F");

            //Humidity


            //Temp Cards

            function Card1(){


                $('#today1').html(TodayDate);
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


                $('#tomorrow').html(ToDate);
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


                $('#dayAfter').html(afterDate);
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


                $('#dayFour').html(fourthDate);
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


                $('#dayFive').html(fifthDate);
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
        marker.setLngLat(newCenter);
        popup.setHTML('<h3 class="font">' + userInput + '</h3>');
        map.flyTo({center: newCenter});
    });
});


// var coordinates = [];
// // coordinates.push(pushingCord);
console.log(coordinates);
