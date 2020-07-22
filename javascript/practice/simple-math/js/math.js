// Here are some simple pieces of code where basic math methods are used

// 1. The program counts the amount of seconds you've lived

// Storing values

const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

// Counting seconds alive

let secsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * 27;
document.querySelector('main').innerHTML = `<h3>I've been alive for ${secsAlive} seconds.</h3>`; // Output

// 2. The program simply adds user's inputs

// Using the + operator to convert string input to a number

const htmlExp = prompt("How many years of HTML experience do you have?");
const cssExp = prompt("How many years of CSS practice do you have?");
const totalExp = +htmlExp + +cssExp; // Easily converting strings to numbers
const message = `<h3>Your total experience is ${totalExp} years.</h3>`;
document.querySelector('main').innerHTML = message; // Output

console.log(typeof +htmlExp, typeof +cssExp);

// 3. The program lets you "roll a dice" by generating random numbers

function dieRoll() {
    return Math.floor(Math.random() * 6) + 1; // Generating random numbers
}

console.log(`You rolled ${dieRoll()}`); // Output



