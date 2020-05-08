// A simple program that knows some arithmetic operators

alert("Let's do some math!");

// Declaring variables

let num0;
let num1;
let message;

// Collecting numeric input

num0 = prompt("Please type a number.");
num0 = parseFloat(num0);
if (isNaN(num0)) {
    alert("Seems like it is not a number you typed. Redo and refresh.")
}

num1 = prompt("Now enter the second one.");
num1 = parseFloat(num1);
if (num1 === 0) {
    alert("You're going to divide by zero. No way you can do this. Redo and refresh.")
}

// Building a message

message = `<h1>Math with the numbers ${num0} and ${num1}</h1>`;
message += `${num0} + ${num1} = ${num0 + num1}`;
message += `<br>`;
message += `${num0} - ${num1} = ${num0 - num1}`;
message += `<br>`;
message += `${num0} * ${num1} = ${num0 * num1}`;
message += `<br>`;
message += `${num0} / ${num1} = ${num0 / num1}`;

// Output

document.querySelector('main').innerHTML = message;