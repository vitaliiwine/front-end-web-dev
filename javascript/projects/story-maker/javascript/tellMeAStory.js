//The program retrieves user feedback and combines that
// feedback to create a string that displays on the page.

const welcome = alert("I just need some words to make a sentence for you :)");
const adjective = prompt("Enter an adjective");
const noun1 = prompt("Enter a noun");
const verb = prompt("Enter a verb");
const noun2 = prompt("Enter a noun");
const preposition = prompt("Enter a preposition");
const noun3 = prompt("Enter a noun");


let story = `There once was a ${adjective} ${noun1} who wanted to ${verb} ${noun2} ${preposition} the ${noun3}.`;

document.querySelector('h1').innerHTML = "That's what we've got!";
document.querySelector('p').innerHTML = story;