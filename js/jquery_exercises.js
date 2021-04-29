"use strict";

$(document).ready(function() {

    var theBody = $(".everything").text();
    alert(theBody);
});

$('#header').click(function(){
    $(this).next().slideToggle(500);
    // $(this).next().fadeToggle(500);
    $(this).html('click me!');
});

$('p').css('font-size', '25px');
$('.codeup').css({'border':"solid red 1px",  "border-radius" : "5px"});
$('li').css({'font-size': '20px'});
$('p,h1,li').css({"background-color": "yellow"});

