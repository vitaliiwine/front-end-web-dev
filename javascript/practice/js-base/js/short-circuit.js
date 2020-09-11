// This will output the last true value

console.log(3 === 3 && 'cow' && 'chicken');

// Check age function

function isAdult( age ) {

    let pass = 'You are old enough, come in!';
    let denied = 'Cause we are yuuuuooooong!';

    if (age && age >= 18){
        console.log(pass);
    } else {
        console.log(denied);
    } 
}

isAdult(12);

// Short-circuit age function

// function isAdult( age ) {
//     return age && age >= 18 ;
// }
//
// console.log(isAdult(15));

// Count to five function

// Default parameters ECMA2015

function countToFive( start = 1 ) {

    // If the argument is undefined

    start = start || 1;
    for (let i = start; i <= 5; i++) {
        console.log(i);
    }
}

countToFive();

// Greeting function

function greet( name ) {
    name = prompt('Hello, tell me your name please?');
    return name;
}

document.querySelector('h1').innerHTML = `Hi, ${greet(name)}!`;