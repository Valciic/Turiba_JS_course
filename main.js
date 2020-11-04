// Registration form validation

// Define data of a client
const clientsFirstName = "Albert";
const clientsLastName = "Henckels";
const clientsPersonalId = "18081969";

// Get message field element
let message = document.getElementById('confirmation-message');

// Get input value from the form fields
let firstNameInput = document.getElementById('input-firstName');
let lastNameInput = document.getElementById('input-lastName');
let personalIdInput = document.getElementById('input-personalId');

// Creating button element to work with
const registerBtn = document.querySelector('.formBtn');
// Listening for click of the button
registerBtn.addEventListener('click', getUserData);
function getUserData(e) {
    e.preventDefault();
    // compare data provided with user data
    // if correct, show good message
    if (firstNameInput.value === clientsFirstName &&
        lastNameInput.value === clientsLastName &&
        personalIdInput.value === clientsPersonalId) {
        message.style.backgroundColor = '#bd7897';
        message.style.width = "200px";
        message.textContent = 'Welcome, mounsieur Henckels! Your room is waiting for you!';
    } 
    // if data incorrect, show fail message
    else {
        message.style.backgroundColor = '#b01417';
        message.style.width = "200px";
        message.textContent = 'Registration not successful! Please check data provided.'
    };
};

// Clear data from input fields after clicking outside button
registerBtn.addEventListener('blur', clearInputData);

function clearInputData(e) {
    e.preventDefault();
    message.textContent = '';
    message.style.backgroundColor = 'transparent';
    firstNameInput.value = '';
    lastNameInput.value = '';
    personalIdInput.value = '';
}
    
// Marking of room table according to room status

// Marks taken and reserved rooms in different colors
function checkStatus() {
    // Get node list of table cells with room status
    let roomStatus = document.querySelectorAll('.room-status');
    //Loop through node list
    for (let i = 0; i < roomStatus.length; i++) {
        let rowBackground;
        //check room status text value
        if (roomStatus[i].textContent === 'Taken') {
            rowBackground = roomStatus[i].parentElement;
            //If it's taken, color it redish
            rowBackground.style.backgroundColor = "#b01417";
        } else if (roomStatus[i].textContent === 'Reserved') {
            rowBackground = roomStatus[i].parentElement;
            //If it is reserved, color it pinkish
            rowBackground.style.backgroundColor = "#bd7897";
        }
    }
}


/* In case you will want to improve registration form
here is a regex for checking name or double name with hyphen
or space between two names
/^[A-Z]{1}[a-z]+(\ |\-)?([A-Z]{1}[a-z]+)?/g */