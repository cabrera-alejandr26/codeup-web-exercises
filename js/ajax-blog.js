"use strict";


function Bloggin(){
        $.ajax("json/blog.json").done(function(blog){
                console.log(blog);
                        var theWords = "<div id='theBLog'>";
                        theWords += "<h1>" + blog[0].title + "</h1>";
                        theWords += "<p><small>" + blog[0].date + "<br>" + "<strong>" + "Categories: " + "</strong>" + "<a href='#'>" + blog[0].categories + "</a>" + "</small></p>";
                        theWords += "<p>" + blog[0].content + "</p>";
                        theWords += "</div>";
                        $('#posts').append(theWords);
        }
)}

function Bloggin2(){
        $.ajax("json/blog.json").done(function(blog){
                console.log(blog);
                        var theWords = "<div id='theBLog2'>";
                        theWords += "<h1>" + blog[1].title + "</h1>";
                        theWords += "<p><small>" + blog[1].date + "<br>" + "<strong>" + "Categories: " + "</strong>" + "<a href='#'>" + blog[1].categories + "</a>"  + "</small></p>";
                        theWords += "<p>" + blog[1].content + "</p>";
                        theWords += "</div>";
                        $('#posts').append(theWords);
        }
)}

Bloggin();
Bloggin2();
