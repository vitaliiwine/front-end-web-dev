// While Loop

const upper = prompt("Gimme a number!");

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

let counter = 0;
while (counter < 10) {
    console.log(`The random number is ${getRandomNumber(upper)}`);
    counter += 1;
}

// Do While Loop

let secret;
do {
    secret = prompt("What's the password?");
} while (secret !== "sesame");

// For Loop

for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(upper));
}