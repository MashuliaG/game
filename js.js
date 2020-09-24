let clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

/*move earn*/
$('.move').on('click', function(){
    $(this).css('position', 'absolute')
.css('top',  randomValue(40)+ '%')
.css('left', randomValue(70)+ '%');
});


/*fall and move coin*/
$('.move').on('click', function(){
    $('.coin')
    .css('position','relative')
    .css('visibility','visible')
    .css('top', randomValue(40)+ '%')
    .animate(
        {
            opacity:1,
            top: $(window).height() - $(this).position().top
        },
        'slow',
        function(){$(this).css('visibility','hidden')
        .css('left', randomValue(70)+ '%');
        });
});

function randomValue(maxValue){
    return Math.floor((Math.random() * maxValue) + 1);
}

/*loader*/
$(window).on('load', function() {
    setTimeout(function() {
        $('.back').fadeOut('slow', function() {});
    }, 2000);
});
