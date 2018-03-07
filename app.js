var array = ["stuff", 2, "cars", "memes"];

var rep = "i replaced the rear one with this one, check out the code lmao";

array[3] = rep;

var i;
for(i=0; i<=3; i++){
  var a = document.getElementById("fourth")
  var b = document.createElement("div")
  b.innerHTML = array[i]
  a.appendChild(b)
}

var prop = document.getElementById("fourth")
prop.style.fontFamily = "arial";
prop.style.color = "blue";
prop.style.background = "red";


var c = Math.floor(Math.random()*3)

var d = document.getElementById("paragraph3")
var e = document.createElement("div")

e.innerHTML = array[c]

d.appendChild(e)
