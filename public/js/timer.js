let timeEnd;
let timeLeft = 25;
let time;
function downloadTimer() {
    timerEl.removeAttribute("hidden");
    startScreen.setAttribute("style", "display: none");
    quiz.setAttribute("style", "display: block !important");
    time = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "Finished";
        } else {
            document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
    }, 1000);
}
