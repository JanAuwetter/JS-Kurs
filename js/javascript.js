
function windowTest() {
  console.log(window);

  window.open("index.html",
  "Meine Startseite");

  window.addEventListener("deviceorientation", function (event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    console.log("Alpha" + alpha);
    console.log("Beta" + alpha);
    console.log("Gamma" + alpha);
  });

  let result = confirm("bitte bestätigen");
  if (result) {
    alert("auf ok gedrückt");
    }
    else {
      alert("auf abbrechen gedrückt");
    }
}




function createHeaderLine(size, text) {


    var headline = document.createElement(size);
    headline.innerHTML = text;
    headline.id = "headline2";

    headline.addEventListener("click", function(){
      alert("angeklickt" + size);

    });
    headline.addEventListener("mouseover", function(){
    document.getElementsByTagName("h1")[0].style.color = "blue";
    });
    headline.addEventListener("mouseout", function(){
    document.getElementsByTagName("h1")[0].style.color = "blue";
    });



    var headLine1 = document.getElementById("headLine1");
    headLine1.appendChild(headline);

    var body = document.getElementsByTagName("body");
    console.log(body);
    body[0].appendChild(headline);

    console.log( document.getElementById("headLine1").hasChildNodes());


}

function clickMe(id){
  alert(id);
}

function afterCompletePageLoading(){

  document.addEventListener("keyup", function(event){

    if(event.keyCode === 13){
      event.preventDefault();
      document.getElementById("headline2").click();
    }
    console.log(event);
      });
  createHeaderLine("h1", "Dynamisch generierte Überschrift");
  createHeaderLine("h2", "Dynamisch generierte Überschrift");
  createHeaderLine("h3", "Dynamisch generierte Überschrift");
  createHeaderLine("h4", "Dynamisch generierte Überschrift");
  createHeaderLine("button", "Dynamisch generierte Überschrift");


        let result = generateLottoNumbers();
        generateLottoNumbers().forEach((item, i) => {

        });
      var element = document.getElementById("number_one_field").value


      element = document.getElementById("headLine1").innerHTML

      document.getElementById("headLine1").innerHTML = "Dünne Überschrift";

      document.getElementById("number_one_field").value = result[0];

      element = document.getElementsByTagName("h1")[0].style.color = "red";


}


// Zahl 1-49
// 6 Zahlen
// eine Superzahl 0 und 9
function generateLottoNumbers(){
// array angelegt mit []
 let list = [];
  for (var i = 0; i < 6; i++) {
    let zahl = Math.random()*49;
    zahl = Math.ceil(zahl);
    list.push(zahl);
 }
  return list;
}






function checkNumber(number){

  let result;

// es ist eine zahl oder es keine zahl
if ( !isNaN(number) ) {
  // zahl ist kleiner 100 oder größer 100
      if ( number <100) {
        result = "Das ist kleiner als 100";
      }
      else {
        result = "Die Zahl ist zu groß";
      }
    }
    else {
  result = "Es ist keine Zahl";
  }
  return result;
}
