function Viewdate(){
//今日の日付データを変数datedaytimeに格納
var datedaytime = new Date(); 

//年・月・日・曜日・時間を取得
var year = datedaytime.getFullYear();
var month = datedaytime.getMonth()+1;
var week = datedaytime.getDay();
var day = datedaytime.getDate();
var Hour = datedaytime.getHours();
var Min = datedaytime.getMinutes();
var Sec = datedaytime.getSeconds();

var yobi = new Array("日","月","火","水","木","金","土");

document.getElementById("date").innerHTML = "<h2>" +"西暦"+year+"年"+month+"月"+day+"日 "+yobi[week]+"曜日  "+Hour+"時"+Min+"分"+Sec+"秒" + "</h2>";

/*document.getElementById("aaa").innerHTML = yobi;*/

}


//yobiをdayにしたら上手くいかなかった、day以外の文字ならＯＫ、あ、dayは既に使ってたからだ

/*以下を関数の中に入れたらだめだった。
Dateが緑色にならなかった
var now = new Date();
var target = document.getElementById("date");

var Year = now.getFullYear();
var Month = now.getMonth()+1;
var Date = now.getDate();
var Hour = now.getHours();
var Min = now.getMinutes();
var Sec = now.getSeconds();

document.getElementById("date").innerHTML = "<h2>" +  Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec  +"</h2>";*/