var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) +1; //1-6

var randomImages = "dice" + randomNumber1 +".png"; //dice1-6.png
var randomImagesSources = "images/"+randomImages; // images/dice1-6.png

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImagesSources);



var randomNumber2 = Math.floor(Math.random()*6)+1; //1-6

var randomImages1 = "dice"+randomNumber2+".png";  //dice1-6.png
var randomImagesSources1 = "images/"+randomImages1;// images/dice1-6.png

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImagesSources1);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 player1 Wins!"
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "player2 Wins! 🚩"
}

else{
    document.querySelector("h1").innerHTML = "Draw!"
}