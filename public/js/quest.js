const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")
// what the charecture has on him/her
let state = {}

// start game
function startGame() {
    state = {}
    showTextNode(1)
}
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex)
    textElement.innerText = textNode.text
    // removes options
    while (optionsButtonElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    // add the questions that we need to
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = doument.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requireState == null || option.requiredState(state)
}
function selectOption(questions) {
    const nextTextNodeId = option.nextText
    // where we restart the game
    if (nextTextNodeId <= 0) { }
    returnstartGame()
    state = Object.assign(state, option.setState)
    showTextNode(nextNodeId)
}

// define variables in an object
const textNodes = [
    {
        id: 1,
        text: "The ground just in front of your feet crumbles to unveil a bottomless pit."
          options: [
            {
                text: 'Do you use Magic to summon a plank to cross?'
                    setState: {/* whatever on hand: true*/ },
                nextText: 2
            },
            {
                text: 'Do you try to jump over the pit?'
                    setState: {/* whatever on hand: true*/ },
                nextText: 3
            },
            {
                text: 'Do you climb the cracks in the wall to cross the pit?'
                    setState: {/* whatever on hand: true*/ },
                nextText: 4
            },
            {
                text: 'Do you try to break off pieces of stone to make a bridge?'
                    setState: {/* whatever on hand: true*/ },
                nextText: 5
            },
        ]
    },
    {
        id: 2,
        text: "A goblin emerges from a different pathway! Before the goblin can acknowledge you, a stone 
        golem emerges, fending off the goblin, Do you: ",
        options: [
            {
                text: "run down the path the goblin emerged from?",
                requiredState: (currentState) => currentState. /* verifying we have said thing*/
                    setState: { magic: true, fight false }
                nextText: 6
            },
    {
        text: "begin fighting the goblin?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { fight: false, magic: true }
                nextText: 7
            },
{
    text: "try to reason with the goblin?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { reason: false, magic: true }
    nextText: 8
},
{
    text: "use magic to heal the golem?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { run: false, magic: true }
    nextText: 9
},
]
    },
{
    id: 3,
        text: "You encounter berries. The golem appears to be curious. You sense a warmth from
    the berries drawing you toward them.",
    options: [
        {
            text: "Do you eat the berries?",
            requiredState: (currentState) => currentState. /* verifying we have said thing*/
                setState: { berries: false, onward: true }
                nextText: 10
            },
{
    text: "Do you feed the golem berries?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { feed: false, onward: true }
    nextText: 11
},
{
    text: "Do you enchant the berries?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { enchant: false, onward: true }
    nextText: 12
},
{
    text: "Do you continue onward?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { onward: true, berries: false }
    nextText: 13
},
        ]
    },
{
    id: 4,
        text: "10 skeletons appear from the next path. As the golem begins to destroy the skeletons, 
    twice the number appear.",
    options: [
        {
            text: "Do you use magic to seal off the gate?"
            requiredState: (currentState) => currentState. /* verifying we have said thing*/
                setState: { charm: false, magic: true }
            nextText: 14
        },
{
    text: "Do you fight your way through?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { fight: false, magic: true }
    nextText: 15
},
{
    text: "Cast a vision spell to lose the skeleton's attention?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { magic: true, charm: false }
    nextText: 16
},
{
    text: "Take a moment to smoke your pipe, and contemplate your next ove?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { pipe: false, magic: true }
    nextText: 17
},
    ]
},
{
    id: 5,
        text: "As you approach the gate, a black robed mage appears in front of you. 'Weary traveler, 
    you must answer my riddle if you wish to proceed.What being draws breath that consumes and grows, but that breath will never join the living ? '”,
    options: [
        {
            text: "Wind!",
            requiredState: (currentState) => currentState. /* verifying we have said thing*/
                setState: { Wind: false, fire: true }
            nextText: 18
        },
{
    text: "Beast?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { earth: false, fire: true }
    nextText: 19
},
{
    text: "Yourself!",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { water: false, fire: true }
    nextText: 20
},
{
    text: "Fire?",
        requiredState: (currentState) => currentState. /* verifying we have said thing*/
            setState: { fire: true, wind: false }
    nextText: 21
},
     ]
    },
{
    id: 6, /* game over*/
        text: /*text about end of game */
    options: [
        {
            text: "Restart",
            nextText: -1
        }
    ]
}
]
var timeEnd;
var timeLeft = 25;
var time;
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
startGame()