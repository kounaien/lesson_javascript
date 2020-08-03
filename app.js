// var hello = "Hello, World";
//alert(hello);

//整数
// var int1 = 1;
//alert(int1);

//負数
// var int2 = -10;

//小数点
// var float1 = 3.14;

//文字列
// var str1 = 'javascriptを覚えよう';

//四則演算
// alert(4 + 3);

// alert(8 - 5);

// alert(2 * 6);

// alert(10 / 2);

//文字列結合
// alert('Hello' + 'World');

// var str1 = 'Hello';
// var str2 = 'World!!';
// alert(str1 + str2);

//条件式
//条件式１つの場合
// if(条件1){
//     処理１
// }
// 条件１を満たす時処理１実行

// //条件式２つ
// if(条件１){
//     処理１
// }
// else{
//     処理２
// }
//条件１を満たす時は処理１を満たさなときは処理２を

//２つの条件式で処理を分ける場合
// if(条件１){
//     処理１
// }
// else if(条件２){
//     処理２
// }
// else{
//     処理３
// }
//条件１を満たすときは処理１条件２を満たすときは処理２どちらも満たさないときは処理３

// var orange = 100;
// var apple = 120;

// if(orange < apple){
//     alert('みかんの値段がりんごより安い');
// }
// else if (orange == apple){
//     alert('値段は同じ');
// }
// else{
//     alert('みかんの方が高い');
// }

//繰り返し処理
// while文は条件式が真である限り繰り返す
// for文は決められた回数

//while
// while(条件){
//     処理
// }

// var max = 100;
// var num = 1;
// var count = 0;
// while(num < max){
//     num = num * 2;
//     count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do while 文では条件式の真偽に関わらず最初の一回だけは必ず処理が行われる
// その後条件式を評価して繰り返し続けるか抜けるか決めている

//do while
// do{
//     最低１回行われる処理
// }while(条件式);

// for決められた回数の処理
//     繰り替える回数を初期値で設定
//     条件を満たす場合の処理
// for( 初期値; 条件式; 増減値;){
//     繰り返し処理
// }

// var i; ここで変数iを宣言
// var num = 0;　変数numを宣言し初期値を0に設定

// i++はi = i + 1と同じ
//変数num にnum+ iを代入
// for(i = 1; i < 11; i++){
//     num = num + i;
// }

// alert('１から１０まで足し算した結果は' + num + 'です');

// 関数
// 関数は繰り返し行われる一連の処理を１つにまとめたもの

// 引数:入力される値　戻り値：出力される値
// function 関数名(引数){
//     処理内容
// return 戻り値;
// }

//　メイン部分
// var alertString;
// alertString = addString("webCamp");

//制作した巻数を呼び出す
// alert(alertString);

//作成した巻数
// function addString(strA){
//     var addStr =  "Hello" + strA;
//     return addStr;
// }

//入力ダイアログで値を入力する
// var promptStr = prompt('何か好きな文字を入力してください');

// alert(promptStr);

// var user_hand = prompt('じゃんけんの手をグーチョキ、パーから選んでください')

// alert('あなたの選んだ手は' + user_hand + 'です');

// function getJShand(){
//     var js_hand_num = Math.floor( Math.random() * 3);

//     if(js_hand_num == 0){
//         js_hand = "グー";
//     }else if(js_hand_num ==  1){
//         js_hand = "チョキ";
//     }else if(js_hand_num == 2){
//         js_hand = "パー";
//     }
//     return js_hand;
// }

//Math.floor( Math.random() * 3);これは0〜2までのランダムな整数値を生成

// ランダムじゃんけん処理


// じゃんけんの値を入力してもらうプロンプト欄を作成
var user_hand = prompt('じゃんけんの手をグーチョキパーから選んでください');

//違う値を入力した際の処理
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
    alert("グーチョキパーのいずれかを入力してください");
    user_hand = prompt("じゃんけんの手をぐーちょきぱーのいずれかを入力してください");
}

// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザの手とjavascriptのじゃんけんの手を比べる関数を呼び出し結果をjudgeに入れる
var judge = handJudge(user_hand, js_hand);

// 結果を表示
if (user_hand != null) {
    alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です');
}else {
    alert("またチャレンジしてね");
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3);
    var hand_name;

    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }

    return hand_name
}

// ユーザーの手とjavascriptのじゃんけんの手を比べる関数
function handJudge(user, js){
    var winloseStr;

    if(user == "グー"){
        if(js == "グー"){
            winloseStr = "あいこ";
        }else if(js == "チョキ"){
            winloseStr = "勝ち";
        }else if(js == "パー"){
            winloseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winloseStr = "負け";
        }else if(js == "チョキ"){
            winloseStr = "あいこ";
        }else if(js == "パー"){
            winloseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winloseStr = "勝ち";
        }else if(js == "チョキ"){
            winloseStr = "負け";
        }else if(js == "パー"){
            winloseStr = "あいこ";
        }
    }
    return winloseStr;
}





