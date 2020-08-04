// $(function(){
//     $('.box1').css({
//         'background-color': '0000FF',
//         'height': '100px'
//     });
// });

// 上から下にスライドで表すcssにdisplay: none;
// $(function(){
//     $('.box1').slideDown();
// });

// 下から上にスライドで消す
// $(function(){
//     $('.box1').slideUp();
// });

// 非表示を青に変えて表示
// $(function(){
//     $('.box1').show();
//     $('.box1').css({'background-color': '#0000FF'});
// });

// 表示されている要素を非表示
// $(function(){
//     $('.box1').hide();
// });

// 確認問題
// $(function(){
//     $('.box1').slideUp();
//     $('.box1').css({
//         'background-color': '#0000FF',
//         'height': '100px'
//     });
// });
// 正解
// $(function(){
//     $('.box1').slideDown( 1000, function(){
//         $('.box1').css({
//             'background-color': '#0000FF',
//             'width': '200px',
//             'height': '100px'
//         }).slideUp();
//     });
// });

//マウスオーバーイベント
// $(function(){
//     $('.box1').mouseover(function(){
//         $('.box1').css({'background-color': '#0000FF'});
//     });
//     $('.box1').mouseout(function(){
//         $('.box1').css({'background-color': '#FF0000'});
//     });
// });

// $(function(){
//     $('.box1').mouseover(function(){
//         $('.box1').addClass('box1-ext');
//     });
//     $('.box1').mouseout(function(){
//         $('.box1').removeClass('box1-ext');
//     });
// });

$(function(){
    $('.box1').on('click', function(){
        $('.box1').addClass('box1-ext');
    });
    $('.box1').mouseout(function(){
        $('.box1').removeClass('box1-ext');
    });
});


