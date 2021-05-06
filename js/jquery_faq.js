

    // $('.reveal').click(function(){
    //     // $(this).removeClass('.invisible');
    //     $('.invisible').toggleClass('visible');
    //     // $('.visible').removeClass('invisible')
    //
    // });


//  PART 1
    $('#q1').click(function(){
        $(this).toggleClass('highlight');
        $('.q1').toggleClass('visible');
    });

    $('#q2').click(function(){
    $(this).toggleClass('highlight');
    $('.q2').toggleClass('visible');
});

    $('h1').hover(function(){
    $(this).css({"background-color" : "black"});
    $(this).css({"color" : "whitesmoke"});
},
    function(){
    $(this).css({"background-color" : "initial"});
    $(this).css({"color" : "initial"});
});

    //PART2
    $('.button2').click(function(){
    $('.yellow-stone').children().last().css({'background' : 'yellow'});
    $('.arches').children().last().css({'background' : 'yellow'});
    $('.yosemite').children().last().css({'background' : 'yellow'});
});

    $('#first').click(function(){
    $('#first').next().css({'font-weight' : 'bold'});
});
    $('#second').click(function(){
    $(this).next().css({'font-weight' : 'bold'});
});
    $('#third').click(function(){
    $(this).next().css({'font-weight' : 'bold'});
});

    $('.yellow-stone').click(function(){
    $(this).children().first().css({'color' : 'blue'});
});
    $('.arches').click(function(){
    $(this).children().first().css({'color' : 'blue'});
});
    $('.yosemite').click(function(){
    $(this).children().first().css({'color' : 'blue'});
});


//MONKEY PROJECT
var monkey1 = $('.monkey1').attr('src',"Images/hear-no-evil.png");
var monkey2 = $('.monkey2').attr('src',"Images/see-no-evil.png");
var monkey3 = $('.monkey3');


    $('.uno').click(function(){
       // if($('.box1').hasClass("monkey1")){
       //     monkey1.removeClass('monkey1').addClass('monkey2');
       //     monkey2.removeClass('monkey2').addClass('monkey1');
       // }
       if($('.box1').hasClass("image1").attr('src',"Images/hear-no-evil.png")){
           monkey1.toggleClass('monkey2').attr('src',"Images/hear-no-evil.png");

       }

    })

    $('.tres').click(function(){
       if($('.box3').hasClass("monkey3")){
           monkey3.removeClass('monkey3').addClass('monkey1');
           monkey1.removeClass('monkey1').addClass('monkey3');
       }
       // if (monkey2.hasClass('monkey2')){
       //     monkey2.removeClass('monkey2').addClass('monkey3');
       //     monkey3.removeClass('monkey3').addClass('monkey2');
       // }

    })

    // $('.uno').click(function (){
    //     $('.monkey1').toggleClass('monkey2');
    // })