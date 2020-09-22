var gameScore = document.querySelector("highScore"); 
var clear = document.querySelector("reset"); 

clear.addEventListener("click", function () {
    localStorage.clear(); 
    location.reload(); 
});

var totalScores = localStorage.getItem("totalScores"); 
totalScores = JSON.parse(totalScores); 

if (totalScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = totalScores[i].initals + " " + allScores[i].score;
        highScore.appenedChild(createLi); 
    }
} 
