let card1var = 0;
let card2var = 0;
let card3var = 0;
let card4var = 0;

function Rotatecard1() {
  // document.getElementById("card1").focus();
  if (card1var == 0) {
    document.getElementById("card1").style.transform = "rotateY(180deg)";
    document.getElementById("card1").style.transitionDuration = "1.5s";
    card1var = 1;
  } else if (card1var == 1) {
    document.getElementById("card1").style.transform = "rotateY(0deg)";
    card1var = 0;
  }
}

function Rotatecard2() {
  // document.getElementById("card1").focus();
  if (card2var == 0) {
    document.getElementById("card2").style.transform = "rotateY(180deg)";
    document.getElementById("card2").style.transitionDuration = "1.5s";
    card2var = 1;
  } else if (card2var == 1) {
    document.getElementById("card2").style.transform = "rotateY(0deg)";
    card2var = 0;
  }
}

function Rotatecard3() {
  // document.getElementById("card1").focus();
  if (card3var == 0) {
    document.getElementById("card3").style.transform = "rotateY(180deg)";
    document.getElementById("card3").style.transitionDuration = "1.5s";
    card3var = 1;
  } else if (card3var == 1) {
    document.getElementById("card3").style.transform = "rotateY(0deg)";
    card3var = 0;
  }
}

function Rotatecard4() {
  // document.getElementById("card1").focus();
  if (card4var == 0) {
    document.getElementById("card4").style.transform = "rotateY(180deg)";
    document.getElementById("card4").style.transitionDuration = "1.5s";
    card4var = 1;
  } else if (card4var == 1) {
    document.getElementById("card4").style.transform = "rotateY(0deg)";
    card4var = 0;
  }
}
