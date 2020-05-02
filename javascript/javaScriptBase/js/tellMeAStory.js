//This program retrieves user feedback and combines that
// feedback to create a string that displays on the page.

const welcome = alert(`Hey, let's play! I just need some words to make a sentence for you :)`);
const noun = prompt(`Enter a noun`);
const adjective = prompt(`Enter an adjective`);
const verb = prompt(`Enter a verb`);
const adverb = prompt(`Enter an adverb`);
const preposition = prompt(`Enter a preposition`);
const adverbial = prompt(`Enter an adverbial`);


let story = `A ${adjective} ${noun} ${adverb} ${verb} ${preposition} ${adverbial}.`;

document.querySelector('p').innerHTML = story;