function Viewnatsu(){
  var strTemp = "JavaScript頑張ろう";
  document.getElementById("ikigomi").innerHTML = "<h2>" + strTemp + "</h2>";
}

function NatsuChange(){
  let strTemp = document.getElementById("myString").value;
  strTemp = strTemp + "だっちゃ。";
  document.getElementById("natsu").innerHTML = "<h2>" + strTemp + "</h2>"
}

function Textgattai(){
  let strTemp1 = document.getElementById("text1").value;
  let strTemp2 = document.getElementById("text2").value; 
  strTemp = strTemp1 + strTemp2;
  document.getElementById("こたえ").innerHTML = "<h2>" + strTemp + "</h2>"
}

document.getElementById('Button').addEventListcer('click',ButtonDOM)
function ButtonDOM(){
  document.getElementById('A').textConten="ハロー";
}