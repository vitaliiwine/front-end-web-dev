// The program returns a random number between two numbers

/**
 * Returns a random number between two numbers
 *
 * @param {number} lower - The lowest number.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

const twoNumRandom = (lower, upper) => {
    if (isNaN(lower) || isNaN(upper)) {
        throw Error("One of the inputs isn't a number, please, provide numbers.")
    } else
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Input

const input = () => console.log(twoNumRandom(30,  50));
input();

// Arrow function examples

const addToTen = num =>  10 + num;

const divideUs = (num1, num2) => num1 / num2;

const printMyName = () => {
    let myName = 'Ashley';
    console.log(myName);
};

const multiplyByTen = num => 10 * num;

const printToTen = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
};

const addUs = (num1, num2) => { console.log(num1 + num2)};

const multiplyUs = (num1, num2) => console.log(num1 * num2);

const subtractFromTen = num => {
    const diff = 10 - num;
    console.log(diff);
};

const printDate = date => console.log(date);


multiplyUs(2,6);
subtractFromTen(4);
printDate('1/16/18');