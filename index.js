setTimeout(() => {  changerPlayerName(); }, 200);

function changerPlayerName(){
    var yourName = prompt("What is your name?");
    document.getElementById("playerName").innerHTML = yourName;
}

function myFunction(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 You Win!";
        document.querySelector("#change").innerHTML = "Well Done mate.";
    }
    else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Computer Wins! 🚩";
        document.querySelector("#change").innerHTML = "Better luck next time.";
    }
    else{
        document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
        document.querySelector("#change").innerHTML = "That was close.";
    }
}
