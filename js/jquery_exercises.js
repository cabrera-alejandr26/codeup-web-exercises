"use strict";

// $(document).ready(function() {
//
//     var theBody = $(".everything").text();
//     alert(theBody);
// });
//
// $('#header').click(function(){
//     $(this).next().slideToggle(500);
//     // $(this).next().fadeToggle(500);
//     $(this).html('click me!');
// });
//
// $('p').css('font-size', '25px');
// $('.codeup').css({'border':"solid red 1px",  "border-radius" : "5px"});
// $('li').css({'font-size': '20px'});
// $('p,h1,li').css({"background-color": "yellow"});

//NEW JQUERY CODE
$('#header').click(function(){
    $('h1').css({'color' : 'blue'});
});

$('p').dblclick(function(){
    $('p').css({'font-size' : '28px'});
});

$('li').hover(function(){
    $(this).css({'color' : 'red'});
},
    function (){
    $(this).css({'color' : 'black'});
    });