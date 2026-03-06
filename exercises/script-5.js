// === Adding a main heading
// 1. Create the element
const mainHeading = document.createElement("h1");

// 2. Add content
mainHeading.innerText = "Welcome to JavaScript";

// 3. Append to the web page (document.body)
document.body.appendChild(mainHeading);


// === Adding a text paragraph
// 1. Create the element
const introPara = document.createElement("p");

// 2. Add content
introPara.innerText = "This entire page was generated using JavaScript code. No HTML tags were written in the body.";

// 3. Append to the web page
// This will appear UNDER the heading we added previously
document.body.appendChild(introPara);


// === Adding a sub-heading
// 1. Create
const subHeading = document.createElement("h2");

// 2. Add Content
subHeading.innerText = "About the DOM";

// 3. Append
document.body.appendChild(subHeading);


// 1. Create
const suHeading = document.createElement("h3");

// 2. Add Content
suHeading.innerText = "About My Favorite Links";

// 3. Append
document.body.appendChild(suHeading);


// === NESTING ELEMENTS ===

// A. Create the container (section)
const heroSection = document.createElement("section");

// B. Create the content (paragraph)
const heroText = document.createElement("p");
heroText.innerText = "This paragraph is nested inside a section.";

// C. Append the paragraph TO THE SECTION
heroSection.appendChild(heroText);

// D. Append the section TO THE BODY
document.body.appendChild(heroSection);


// === NESTING ELEMENTS ===

// A. Create the container (section)
const anotherSection = document.createElement("section");
anotherSection.id = "important-note"; // Give it a unique ID

// B. Create the content (paragraph)
const someMessage = document.createElement("p");
someMessage.innerText = "This text message is nested inside a section with a unique ID of important-note.";

// C. Append the paragraph TO THE SECTION
// (We add the child to the specific parent, not the body)
anotherSection.appendChild(someMessage);

// D. Append the section TO THE BODY
// (Now we add the parent (and its children) to the page)
document.body.appendChild(anotherSection);


// === Adding formatted content with .innerHTML
// 1. Create a container
const note = document.createElement("div");

// 2. Add content INCLUDING HTML tags
// The browser will render the <b> and <br> tags correctly
note.innerHTML = "<b>Note:</b> Access is granted.<br>Please proceed to the <i>Lobby</i>.";

// 3. Append to body
document.body.appendChild(note);


// === ADDING AN IMAGE ===

// 1. Create the image element
const myImage = document.createElement("img");

// 2. Set the attributes (Source and Alt text)
myImage.src = "https://placedog.net/500/280";
myImage.alt = "A cute puppy";

// 3. Append to the web page
document.body.appendChild(myImage);








