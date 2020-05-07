 /* A simple quiz program which asks 5 questions
 and gives you a crown in case you answer any of them correctly */

alert("Hey, just have a few questions for you.")

// Keeping track of the answers

let correctAnswers = 0;
let wrongAnswers = 0;

// Rank scaling

let rank = '';

// Storing answers

const answer0 = prompt("What's the abb for a hypertext markup language?");
if (answer0.toUpperCase() === 'HTML') {
    correctAnswers += 1;
} else {
    wrongAnswers += 1;
}

const answer1 = prompt("What's 'IT' stand for?");
if (answer1.toUpperCase() === 'INFORMATION TECHNOLOGY') {
    correctAnswers += 1;
} else {
    wrongAnswers += 1;
}

const answer2 = prompt("What's the Cascading Style Sheets for short");
if (answer2.toUpperCase() === 'CSS') {
    correctAnswers += 1;
} else {
    wrongAnswers +=1;
}

const answer3 = prompt("What's the name of the programming language that is also a gem?");
if (answer3.toUpperCase() === 'RUBY') {
    correctAnswers += 1;
} else {
    wrongAnswers += 1;
}

const answer4 = prompt("Do Java and JavaScript mean the same? Provide 'yes/no' answer");
if (answer4.toUpperCase() === 'NO') {
    correctAnswers += 1;
} else {
    wrongAnswers += 1;
}

// Ranks giving

if (correctAnswers === 5) {
    rank = "Wow! Just a Pro. Gongrats, you won the Gold Crown!";
} else if (correctAnswers === 4 || correctAnswers === 3) {
    rank = "Nice! You have just achieved the Silver Crown!";
} else if (correctAnswers === 2 || correctAnswers === 1) {
    rank = "Not bad! You can have the Bronze Crown!";
} else rank = "Oops! Seems like you failed this time."

document.querySelector('main').innerHTML = rank;

console.log(rank);