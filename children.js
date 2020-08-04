$(function(){
    $('button').on('click', function(){
        $('ul').children().css('color', 'red');
    });

    $('button').mouseout(function(){
        $('ul').children().css('color', 'blue');
    });
});