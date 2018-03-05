var array = ["stuff", "other things", "cars", "memes"];

var rep = "really";

array[3] = rep;

var i;
for(i=0; i<=3; i++){
  var a = document.getElementById("fourth")
  var b = document.createElement("div")
  b.innerHTML = array
  a.appendChild(b)
}