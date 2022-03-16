var elBtnRec = document.querySelector(".btn-rec");
var car = document.querySelector(".car");
var car2 = document.querySelector(".car2");
var car3 = document.querySelector(".car3");
var car4 = document.querySelector(".car4");
var car5 = document.querySelector(".car5");
var car6 = document.querySelector(".car6");
var car7 = document.querySelector(".car7");
var car8 = document.querySelector(".car8");

var plane = document.querySelector(".plane");

var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
}


record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
}

record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];

//   var elList = document.createElement("ul")
//   window.document.body.appendChild(elList)
//   var elItem = document.createElement("li")
//   elItem.textContent = 1+ command
//   elList.appendChild(elItem)

    if(command == "go"){
        car.classList.toggle("d-block")
        car2.classList.toggle("d-block2")
        car3.classList.toggle("d-block3")
        car4.classList.toggle("d-block4")
        car5.classList.toggle("d-block5")
        car6.classList.toggle("d-block6")
        car7.classList.toggle("d-block7")
        car8.classList.toggle("d-block8")

        plane.classList.toggle("d-plane")
    }else{
      alert("say go!!!")
    }

}


elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
})