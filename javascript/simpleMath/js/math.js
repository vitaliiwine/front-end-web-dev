const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

let secsAlive = secsPerMin * minsPerHour * hoursPerDay
* daysPerWeek * weeksPerYear * 27;
console.log(`I've been alive for ${secsAlive} seconds.`);

const htmlExp = prompt("How many years of HTML experience do you have?");
const cssExp = prompt("How many years of CSS practice do you have?");
const totalExp = +htmlExp + +cssExp;

const message = `Your total experience is ${totalExp} years`;
document.querySelector('main').innerHTML = message;

console.log(typeof +htmlExp, typeof +cssExp);





