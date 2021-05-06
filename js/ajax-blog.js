"use strict";

$.ajax("json/blog.json").done(function(blog){
        console.log(blog);
})