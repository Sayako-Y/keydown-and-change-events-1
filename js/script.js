var box1 = document.querySelector(".box-1");
//console.log(box1);
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");

document.addEventListener("keydown", function (e) {
  var key = e.key;
  //console.log(e);
  if (e.key === "1") {
    box1.innerText = "🐲";
  } else if (e.key === "2") {
    box2.innerText = "⚾";
  } else if (e.key === "3") {
    box3.innerText = "❤️";
  }
});
