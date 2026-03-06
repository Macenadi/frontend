// Function to update the status text
function updateStatus() {
    // 1. Select the paragraph
    const statusPara = document.getElementById("status-text");

    // 2. Change the text
    statusPara.innerText = "Button has been clicked!";
    statusPara.style.color = "green";
}


// Function to read input and display a greeting
function greetUser() {
    // 1. Get the INPUT element
    const inputField = document.getElementById("user-name");

    // 2. Get the VALUE typed inside it
    const name = inputField.value;

    // 3. Display it in the paragraph
    const msgPara = document.getElementById("greeting-msg");
    msgPara.innerText = "Hello, " + name + "!";
}




function greetUser() {
    const inputField = document.getElementById("user-name");
    const msgPara = document.getElementById("greeting-msg");

    // Get value and TRIM extra spaces
    const name = inputField.value.trim();

    // Check if the name is empty
    if (name === "") {
        // Error: Make border red and show message
        inputField.classList.add("input-error");
        msgPara.innerText = "Please enter your name.";
        msgPara.style.color = "red";
    } else {
        // Success: Remove red border and show greeting
        inputField.classList.remove("input-error");
        msgPara.innerText = "Hello, " + name + "!";
        msgPara.style.color = "black";
    }
}


function checkAge() {
    const ageInput = document.getElementById("user-age");
    const ageMsg = document.getElementById("age-msg");

    // Convert the string value to a Number
    const age = Number(ageInput.value);

    // Check if it is a valid number
    if (age >= 18) {
        ageMsg.innerText = "Access Granted.";
        ageMsg.style.color = "green";
    } else {
        ageMsg.innerText = "You are too young.";
        ageMsg.style.color = "red";
    }
}