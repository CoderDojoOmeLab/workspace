window.onload = function() {
  document.getElementById("Button").addEventListener('click', Kakikae);
}
function Kakikae(){
  document.getElementById('A').textContent="ハロー";
}


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
}