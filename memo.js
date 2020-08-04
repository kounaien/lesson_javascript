htmlファイルに記入する際はscriptタグ内に直接javascript記入
jqueryはjsファイルより先に読み込む必要がある
jqueryを書くには、htmlファイル内に直接記述するか専用のjavascriptファイルに記述します
jQueryを使うにはHTMLと紐付けする必要があるこのときHTMLの読み込みが終わってからjQueryが実行されるように記述する必要がある 
このように記述する
$(document).ready(function(){
    jqueryプログラムの内容
});
頻繁に使うコードなので省略形も存在する
$(function(){
    //jQueryの内容
});

jQueryの基本書式
&(セレクタ).メソッド(パラメータ);

二行目はこの基本書式
$(document).ready(function(){
    $('body').html('<h1>Hello jQuery!!</h1>')
});

セレクタは操作の対象
メソッド何を行うのかhtml
メソッドにパラメータを指定するとその内容に書き換えられますパラメータを指定しない場合にはメソッドが取得される
今回のコードの内容はbodyタグ内のHTMLをh1タグに書き換えなさい

$(function(){
    $('.box1').css({
        'background-color': '0000FF',
        'height': '100px'
    });
});

１つのcssを記述するときはプロパティと値をそれぞれ''で囲み間を[,]で区切るシンプルな書き方をします
$('セレクタ').css('vackground-color, #0000FF');

複数行書くときは
$(function(){
    $('セレクタ').css({
        'プロパティ': '値'
        'プロパティ': '値'
        'プロパティ': '値'
    });
});

アニメーションを追加する
jQueryを利用するとページ上の要素に簡単なアニメーションができる
上から下のスライド
jQueryはHTMLが全て読み込まれてから動作するように設定しなければなりません
このためbox1が最初は非表示になるようにcssファイルにdisplay: none;を追加します

javascriptでは、引数の中に関数を入れることができる
$(function(){
    $('.box1').slideDown(function(){
        $('.box1').css({
            'background-color': '#0000FF',
            'height': '100px'
        }).slideUp();
    });
});

ユーザがプラウザ上で実行する動作のことをイベントと言う

イベントの記述
$('セレクタ名').イベント名(function(){
    イベント発生時に行われる処理
})

イベントはその都度cssを変更するのは手間がかかるから
そこでマウスオーバー時のcssを追加または削除するように設定
.box1-ext {
    border: 10px solid black;
}
これがマウスオーバー時に適用されるようにするcss(class)
$(function(){
    $('.box1').mouseover(function(){
        $('.box').addClass('.box1-ext');
    });
    $('.box1').mouseout(function(){
        $('.box1').removeClass('.box1-ext');
    });
});

addClass()では対象のHTML要素にclass属性を追加
removeClass()では要素に設定されているclass属性が解除

マウスクリックイベントを設定する
クリックのイベントには.click()もあります。しかしclickの場合は、クリックされた時点でイベントが終わってしまいます。
クリック後に複数のイベントが行われるようにしたいのでonを付けた以下のような書き方をします
$('.セレクタ名').on('click', functoin(){
    イベント発生時に行われる処理
});

thisとchildren
thisとは
thisはイベントが発生した要素飲みを変化させます
childrenはHTML要素直下のすべての子要素を取得
変更したい要素を簡単に指定できる

まずthisを指定しないと
$(function(){
    $('.bg1').on('click', function(){
        $('.bg1').slideUp();
    });

    $('.bg2').on('click', function(){
        $('.bg2').slideUp();
    });
    
    $('.bg3').on('click', function(){
        $('.bg3').slideUp();
    });

    $('.bg4').on('click', function(){
        $('.bg4').slideUp();
    });
});
複雑

this指定
$(function(){
    $('.box1').on('click', function(){
        $(this).slideUp();
    });
});

children指定
