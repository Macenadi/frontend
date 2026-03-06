// 1. Select the element by its ID
const myHeading = document.getElementById("mainHeading");

// 2. Check the console to see what we grabbed
console.log(myHeading);


// Select the paragraph
const myPara = document.getElementById("introPara");

// Change the text content
myPara.innerText = "JavaScript has updated this text!";


// Select the div
const myBox = document.getElementById("infoBox");

// Change the content AND the HTML structure
myBox.innerHTML = "<p>I now contain a <b>bold</b> word.</p>";


// Access the main heading again
// (We already created the 'myHeading' variable earlier)

mainHeading.style.color = "white";
mainHeading.style.backgroundColor = "blue";
mainHeading.style.padding = "20px";
mainHeading.style.borderRadius = "10px";


// Select the div
const box = document.getElementById("infoBox");

// Add a CSS class
box.classList.add("highlight-box");


// Remove a CSS class
// box.classList.remove("highlight-box");