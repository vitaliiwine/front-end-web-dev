// Function declarations

const name = "Andrew";

function sayName() {
    return message = `My name is ${name}`;
}

function sayBye() {
    return goodBye = `Bye ${name}`;
}

document.querySelector('main').innerHTML = `${sayName()} and ${sayBye()}`;

// Function expressions

const sayName = function () {
  return message = `My name is ${name}`;
};

const sayBye = function () {
    return goodBye = `Bye ${name}`;
};

// Arrow functions

const sayName = () => {
    return message = `My name is ${name}`;
};

const sayBye = () => {
    return message = `My name is ${name}`;
};

// Single argument

const square = x => x * x;

//Double argument

const add = (a, b) => a + b;
