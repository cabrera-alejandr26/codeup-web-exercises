"use strict";

//Global Variable
var coordinates = [29.42412, -98.49363];

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
                $('.card-text2').html("<li> Humidity: " + tomorrow.humidity + "% </li><li> Max: " + today.temp.max.toFixed(0) + "&deg" + "F | " + "Min: " + today.temp.min.toFixed(0) + "&deg" +
                    "F </li><li> Morning: " + today.temp.morn.toFixed(0) + "&deg" + "F" + "</li>" +
                    "<li> Day: " + today.temp.day.toFixed(0) + "&deg" + "F" + "</li><li> Night: " + today.temp.night.toFixed(0) + "&deg" + "F" + "</li>");
            }
            theStats();
        }
        Card2();



        $('#dayAfter').html(afterDate);
        $('#afterTemp').html(afterTemp + "&deg" + "F");

        $('#dayFour').html(fourthDate);
        $('#dayfourTemp').html(fourthTemp + "&deg" + "F");

        $('#dayFive').html(fifthDate);
        $('#dayfiveTemp').html(fifthTemp + "&deg" + "F");
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
                $(this).css({'height' : '15rem'});
                $('.cardTwo').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }function action3(){
        $('.card3').hover(function(){
                $(this).css({'height' : '15rem'});
                $('.cardThree').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }function action4(){
        $('.card4').hover(function(){
                $(this).css({'height' : '15rem'});
                $('.cardFour').css({'visibility' : 'visible'});
            },
            function(){
                $(this).css({'height' : '6rem'});
                $('.card-body').css({'visibility' : 'hidden'});
            })
    }function action5(){
        $('.card5').hover(function(){
                $(this).css({'height' : '15rem'});
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