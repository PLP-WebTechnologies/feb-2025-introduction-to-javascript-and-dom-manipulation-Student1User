// Array of inspirational coding phrases
const inspirationalPhrases = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Programming is thinking, not typing.",
    "The only way to go fast, is to go well.",
    "Simplicity is the soul of efficiency.",
    "First, solve the problem. Then, write the code.",
    "It’s not a bug – it’s an undocumented feature.",
    "The best error message is the one that never shows up.",
    "Talk is cheap. Show me the code.",
    "Good code is its own best documentation.",
    "The code you write makes a better you, with every line."
];

// Get the buttons and the element we want to manipulate
const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const addElementBtn = document.getElementById("addElementBtn");
const removeElementBtn = document.getElementById("removeElementBtn");
const dynamicText = document.getElementById("dynamicText");

// Add styling to the body for a more modern look
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.lineHeight = '1.6';
document.body.style.backgroundColor = '#f4f4f4';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.textAlign = 'center';
document.body.style.color = '#333';

// Header Styling
const header = document.querySelector("header");
header.style.backgroundColor = '#333';
header.style.color = 'white';
header.style.padding = '20px 0';

// Main Section Styling
const main = document.querySelector("main");
main.style.padding = '20px';
main.style.maxWidth = '800px';
main.style.margin = '0 auto';

// Styling for the Text
dynamicText.style.fontSize = '1.25rem';
dynamicText.style.color = '#000';
dynamicText.style.transition = 'color 0.3s ease';

// Style buttons
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.style.padding = '10px 20px';
    button.style.fontSize = '1rem';
    button.style.color = 'white';
    button.style.backgroundColor = '#007bff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.margin = '10px';
    button.style.transition = 'background-color 0.3s ease';

    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#0056b3';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#007bff';
    });
});

// Footer Styling
const footer = document.querySelector("footer");
footer.style.textAlign = 'center';
footer.style.marginTop = '20px';
footer.style.fontSize = '0.9rem';
footer.style.color = '#777';

// Function to change the text content
changeTextBtn.addEventListener("click", function() {
    dynamicText.textContent = "The text has been changed dynamically!";
});

// Function to change the text color
changeColorBtn.addEventListener("click", function() {
    dynamicText.style.color = "red";
});

// Function to add a new paragraph with an inspirational coding phrase
addElementBtn.addEventListener("click", function() {
    // Randomly select an inspirational phrase from the array
    const randomPhrase = inspirationalPhrases[Math.floor(Math.random() * inspirationalPhrases.length)];

    // Create a new paragraph and set its text to the randomly selected phrase
    const newParagraph = document.createElement("p");
    newParagraph.textContent = randomPhrase;

    // Append the new paragraph to the body
    document.body.appendChild(newParagraph);

    // Apply styling to the new paragraph
    newParagraph.style.fontSize = '1rem';
    newParagraph.style.color = '#333';
    newParagraph.style.margin = '10px 0';
});

// Function to remove the last paragraph
removeElementBtn.addEventListener("click", function() {
    const lastParagraph = document.querySelector("body > p:last-child");
    if (lastParagraph) {
        document.body.removeChild(lastParagraph);
    }
});
