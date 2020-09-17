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
        text:/* the begining text in the adventure*/
            options: [
                {
                    text: '',
                    setState: {/* whatever on hand: true*/ },
                    nextText: 2
                },
          ]
    },
    {
        id: 2,
        text:/* level two */ ,
        options: [
            {
                text: /* the choice to the next advance or Game Over*/ ,
                requiredState: (currentState) => currentState. /* verifying we have said thing*/
                    setState: {  : false, fire: true }
                nextText: 3
            },
]
    },
{
    id: 3,
        text:/*level three*/ ,
    options: [
        {
            text: /* the choice to the next advance or Game Over*/ ,
            requiredState: (currentState) => currentState. /* verifying we have said thing*/
                setState: { fillin: false, fire: true }
                nextText: 4
            },
        ]
    },
{
    id: 4,
        text:/*level 4*/ ,
    options: [
        {
            text: /* the choice to the next advance or Game Over*/ ,
            setState: {  : false, fire: true }

        }
    ]
},
{
    id: 5,
        text:/*level 5*/ ,
    options: [
        {
            text: /* the choice to the next advance or Game Over*/ ,
            setState: {  : false, fire: true }

        }
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
startGame()