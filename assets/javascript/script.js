var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "/assets/images/face-"  + randomNumber1 + ".png";
var randomDiceImg2 = "/assets/images/face-"  + randomNumber2 + ".png";
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
var h1 = document.getElementById("#interactive-h1");
//
img1.setAttribute("src", randomDiceImg1);
img2.setAttribute("src", randomDiceImg2);
//
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}
//
document.addEventListener("keydown", event => {
    if (event.code == "Space") {
        location.reload();
    }
});