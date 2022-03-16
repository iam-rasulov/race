var elBtnRec = document.querySelector(".btn-rec");

var red = document.querySelector(".red");
var red2 = document.querySelector(".red2");
var red3 = document.querySelector(".red3");
var red4 = document.querySelector(".red4");
var red5 = document.querySelector(".red5");

var yellow = document.querySelector(".block-yellow");
var yellow2 = document.querySelector(".block-yellow2");
var yellow3 = document.querySelector(".block-yellow3");
var yellow4 = document.querySelector(".block-yellow4");
var yellow5 = document.querySelector(".block-yellow5");

var green = document.querySelector(".green");
var green2 = document.querySelector(".green2");
var green3 = document.querySelector(".green3");
var green4 = document.querySelector(".green4");
var green5 = document.querySelector(".green5");

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

    if(command == "yellow"){
      
      plane.classList.toggle("d-plane")

      red.classList.add("not-red")
      red2.classList.add("not-red")
      red3.classList.add("not-red")
      red4.classList.add("not-red")
      red5.classList.add("not-red")

      yellow.classList.add("yellow")
      yellow2.classList.add("yellow2")
      yellow3.classList.add("yellow3")
      yellow4.classList.add("yellow4")
      yellow5.classList.add("yellow5")
      

        car.classList.toggle("ds-block")
        car2.classList.toggle("ds-block2")
        car3.classList.toggle("ds-block3")
        car4.classList.toggle("ds-block4")
        car5.classList.toggle("ds-block5")
        car6.classList.toggle("ds-block6")
        car7.classList.toggle("ds-block7")
        car8.classList.toggle("ds-block8")
        
    }
    
    else if(command == "go"){

      yellow.classList.add("block-yellow")
      yellow2.classList.add("block-yellow")
      yellow3.classList.add("block-yellow")
      yellow4.classList.add("block-yellow")
      yellow5.classList.add("block-yellow")

      green.classList.add("block-green")
      green2.classList.add("block-green2")
      green3.classList.add("block-green3")
      green4.classList.add("block-green4")
      green5.classList.add("block-green5")


      car.classList.toggle("d-block")
      car2.classList.toggle("d-block2")
      car3.classList.toggle("d-block3")
      car4.classList.toggle("d-block4")
      car5.classList.toggle("d-block5")
      car6.classList.toggle("d-block6")
      car7.classList.toggle("d-block7")
      car8.classList.toggle("d-block8")

  } 
  

}


elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
})