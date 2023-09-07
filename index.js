

let button = document.querySelector(".diceroll");
button.addEventListener("click", function(){
    let randomNumber = Math.floor((Math.random() * 6) + 1);

    // first dice
    let images = document.querySelector(".img1");
    
    let randomDiceImage = "./images/dice" + randomNumber + ".png";
    images.setAttribute("src", randomDiceImage);
    
    // second dice 
    
    let secondRandomNumber = Math.floor((Math.random() * 6) + 1);
    
    let SecondImages = document.querySelector(".img2");
    let randomDiceImage2 = "./images/dice" + secondRandomNumber + ".png";
    SecondImages.setAttribute("src", randomDiceImage2);
    
    
    let headerText = document.querySelector("h1");
    if (secondRandomNumber > randomNumber){
        headerText.textContent = "Player 2 wins!";
    }
    else if (randomNumber > secondRandomNumber) {
    headerText.textContent = "player 1 wins!";
    }
    else if (randomNumber === secondRandomNumber) {
        headerText.textContent = "Draw!";
    };

});
