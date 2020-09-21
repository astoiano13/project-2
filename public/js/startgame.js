const startButton = document.getElementById('startbtn');

startButton.addEventListener('click', startGame);

function startGame() {
    location.assign('/prompt.html');
}