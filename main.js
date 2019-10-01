// CAUGHT SPEEDING ASSIGNMENT START CODE

// HTML Elements
let calcBtnEl = document.getElementById('calc-btn');
let speedEl = document.getElementById('speed');
let limitEl = document.getElementById('limit');
let birthdayEl = document.getElementById('birthday');
let ticketEl = document.getElementById('ticket-type');
let decisionEl = document.getElementById('decision');

// Add Event Listener
calcBtnEl.addEventListener('click', caughtSpeeding);

// Event Function
function caughtSpeeding() {
    // Inputs
    let speedInput = Number(speedEl.value);
    let limitInput = Number(limitEl.value);
    let birthdayInput = birthdayEl.value;

    // Determine Result
    if (isInputValid(speedInput, limitInput)) {
        ticketEl.innerHTML = determineTicketType(speedInput, limitInput);
        decisionEl.innerHTML = determineDecision(birthdayInput)
    }
    
}

// YOUR FUNCTIONS
