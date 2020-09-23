const containerElement = document.querySelector('.container');
const textElement = document.getElementById('text');
const choicesElement = document.getElementById('choices');
const timeElement = document.getElementById('time');

const textNodes = [
    {
        id: 1,
        text:
            'The ground just in front of your feet crumbles to unveil a bottomless pit.',
        options: [
            {
                text: 'Do you use Magic to summon a plank to cross?',
                nextText: 2,
            },
            {
                text: 'Do you try to jump over the pit?',
                nextText: 6,
            },
            {
                text: 'Do you climb the cracks in the wall to cross the pit?',
                nextText: 6,
            },
            {
                text:
                    'Do you try to break off pieces of stone to make a bridge?',
                nextText: 6,
            },
        ],
    },
    {
        id: 2,
        text:
            'A goblin emerges from a different pathway! Before the goblin can acknowledge you, a stone golem emerges, fending off the goblin, Do you: ',
        options: [
            {
                text: 'run down the path the goblin emerged from?',
                nextText: 3,
            },
            {
                text: 'begin fighting the goblin?',
                nextText: 6,
            },
            {
                text: 'try to reason with the goblin?',
                nextText: 6,
            },
            {
                text: 'use magic to heal the golem?',
                nextText: 6,
            },
        ],
    },
    {
        id: 3,
        text:
            'You encounter berries. The golem appears to be curious. You sense a warmth from the berries drawing you toward them.',
        options: [
            {
                text: 'Do you eat the berries?',
                nextText: 6,
            },
            {
                text: 'Do you feed the golem berries?',
                nextText: 6,
            },
            {
                text: 'Do you enchant the berries?',
                nextText: 6,
            },
            {
                text: 'Do you continue onward?',
                nextText: 4,
            },
        ],
    },
    {
        id: 4,
        text:
            '10 skeletons appear from the next path. As the golem begins to destroy the skeletons, twice the number appear.',
        options: [
            {
                text: 'Do you use magic to seal off the gate?',
                nextText: 6,
            },
            {
                text: 'Do you fight your way through?',
                nextText: 6,
            },
            {
                // eslint-disable-next-line prettier/prettier
                text: 'Cast a vision spell to lose the skeleton\'s attention?',
                nextText: 5,
            },
            {
                text:
                    'Take a moment to smoke your pipe, and contemplate your next ove?',
                nextText: 6,
            },
        ],
    },
    {
        id: 5,
        text:
            'As you approach the gate, a black robed mage appears in front of you. "Weary traveler, you must answer my riddle if you wish to proceed.What being draws breath that consumes and grows, but that breath will never join the living?"',
        options: [
            {
                text: 'Wind!',
                nextText: 6,
            },
            {
                text: 'Beast?',
                nextText: 6,
            },
            {
                text: 'Yourself!',
                nextText: 6,
            },
            {
                text: 'Fire?',
                nextText: 7,
            },
        ],
    },
    {
        id: 6,
        text:
            'You have chosen poorly, and thus your adventure comes to a grim end.',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            },
        ],
    },
    {
        id: 7 /* winner*/,
        text: 'Hello' /*text about end of game */,
        options: [
            {
                text: 'You win, do you want to play again?',
            },
        ],
    },
];

const startingTime = 60;
let currentTextIndex;
let timeLeft;
let timerId;

function renderCurrentText() {
    const textNode = textNodes[currentTextIndex];
    textElement.textContent = textNode.text;

    choicesElement.innerHTML = '';
    for (let i = 0; i < textNode.options.length; i++) {
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = textNode.options[i].text;
        choiceBtn.setAttribute('class', 'btn');
        choiceBtn.setAttribute('data-index', i);
        choicesElement.appendChild(choiceBtn);
    }
}

function init() {
    currentTextIndex = 0;
    timeLeft = startingTime;

    timerId = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert('Time is up, you lose!');
        }

        timeElement.textContent = timeLeft;
    }, 1000);

    renderCurrentText();
}

init();

function postScore() {
    const score = {
        value: timeLeft,
    };

    return fetch('/api/scores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(score),
    });
}

containerElement.addEventListener('click', event => {
    if (event.target.matches('button')) {
        const chosen = event.target;
        const chosenIndex = chosen.getAttribute('data-index');
        const nextId = textNodes[currentTextIndex].options[chosenIndex].nextText;
        currentTextIndex = textNodes.findIndex(tn => tn.id === nextId);

        if (currentTextIndex >= 0) {
            renderCurrentText();
        } else {
            clearInterval(timerId);
            postScore()
                .then(() => {
                    init();
                });
        }
    }
});

// function returnstartGame() {
//     showTextNode(1);
//     setNextQuestion();
// }

// showTextNode(1);

// setNextQuestion();

// function setNextQuestion(currentQuestionIndex) {
//     showQuestion(currentQuestionIndex);
// }

// // Render the question and the answer button group
// function showQuestion(textNodes) {
//     const question = textNodes[currentQuestionIndex];

//     textElement.innerText = question.textNode;
//     question.options.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText = answer.textbutton.classList.add('btn');
//         if (answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener('click', selectAnswer);
//         answerButtonElement.appendChild(button);
//     });
// }

// // function showOption(option) {
// //     return option.requireState === null || option.requiredState(state);
// // }

// // Render Group of 4 answers
// function showTextNode(textNodeIndex) {
//     const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
//     textElement.innerText = textNode.text;
//     // removes options
//     while (optionButtonsElement.firstChild) {
//         optionButtonsElement.removeChild(optionButtonsElement.firstChild);
//     }
//     // add the questions that we need to loop
//     textNode.options.forEach(option => {
//         if (selectOption(option)) {
//             const button = document.createElement('button');
//             button.innerText = option.text;
//             button.classList.add('btn');
//             button.addEventListener('click', () => selectOption(option));
//             optionButtonsElement.appendChild(button);
//         }
//     });
// }

// function selectOption(option) {
//     const nextTextNodeId = option.nextText;
//     // where we restart the game
//     if (nextTextNodeId <= 0) {
//         return 0;
//     }
//     currentQuestionIndex = 0;
//     returnstartGame();
//     state = Object.assign(state, option.setState);
//     showTextNode(nextNodeId);
// }

// // Making timer visible and initiate timer
// function downloadTimer() {
//     timerEl.removeAttribute('hidden');
//     startScreen.setAttribute('style', 'display: none');
//     quiz.setAttribute('style', 'display: block !important');
//     timer = setInterval(() => {
//         if (timeLeft <= 0) {
//             clearInterval(downloadTimer);
//             document.getElementById('timer').innerHTML = 'Finished';
//         } else {
//             document.getElementById('timer').innerHTML =
//                 timeLeft + ' seconds remaining';
//         }
//         timeLeft -= 1;
//     }, 1000);
// }
// downloadTimer();



