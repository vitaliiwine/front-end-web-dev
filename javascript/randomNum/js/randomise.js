const lowIn = prompt("Give me a low number");
const higIn = prompt("Give me a high one");

const lowNum = parseInt(lowIn);
const highNum = parseInt(higIn);

function getRandomArbitrary() {
    return Math.random() * (highNum - lowNum) + lowNum;
}

document.querySelector('main').innerHTML = `The random number between
${lowNum} and ${highNum} is ${getRandomArbitrary()}`;


