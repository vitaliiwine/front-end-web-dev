// The game asks the user to guess the number it thinks of

const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;

// Do While Style

// do {
//     guess = prompt("What's the number I'm thinking of?");
//     guessAttempts++;
//     if (randomNumber === parseInt(guess)) {
//         message = `It took you ${guessAttempts} attempts to guess the number. It was ${guess}!`;
//         break;
//     } else message = `You're run out of attempts. The number was ${randomNumber}`;
// } while (guessAttempts < 10);

// For Style

for (let i = 1; i <= 10; i++) {
    let guess = prompt("What's the number I'm thinking of?");
    if (randomNumber === parseInt(guess)) {
        message = `It took you ${i} attempts to guess the number. It was ${guess}!`;
        break;
    } else message = `You're run out of attempts. The number was ${randomNumber}`;
}

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

main.innerHTML = message;