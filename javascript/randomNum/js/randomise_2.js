/*The program accepts two numbers and gives back one
 * in an interval between two given numbers */

// Storing input

const lowIn = prompt("Give me a low number");
const higIn = prompt("Give me a high one");

// Converting strings into numbers

const lowNum = parseInt(lowIn);
const highNum = parseInt(higIn);

// Logic, output

if (highNum && lowNum) {
    const randomNum = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
    document.querySelector('main').innerHTML = `The random number between
${lowNum} and ${highNum} is ${randomNum}.`;
} else alert("Sorry, that won't work. Provide numbers.");


