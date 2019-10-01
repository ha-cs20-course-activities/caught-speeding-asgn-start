// CAUGHT SPEEDING ASSIGNMENT SOLUTION

// Add Event Listener
document.getElementById('calc-btn').addEventListener('click', caughtSpeeding);

// Event Function
function caughtSpeeding() {
    // Input Values
    let speedInput = Number(document.getElementById('speed').value);
    let limitInput = Number(document.getElementById('limit').value);
    let birthdayInput = document.getElementById('birthday').value;

    // HTML Output Elements
    let ticketEl = document.getElementById('ticket-type');
    let decisionEl = document.getElementById('decision');

    // Determine and Output Ticket Result
    if (isInputValid(speedInput, limitInput)) {
        ticketEl.innerHTML = determineTicketType(speedInput, limitInput);
        decisionEl.innerHTML = determineDecision(birthdayInput);
    } else {
        alert("Car speed must be greater than speed limit.")
        ticketEl.innerHTML = '-----';
        decisionEl.innerHTML = '-----';
    }
    
}

// YOUR FUNCTIONS
