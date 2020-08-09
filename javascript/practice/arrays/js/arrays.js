// JS array methods

const main = document.querySelector('main');

let players = [
    "Sergey",
    "Thomas",
    "Greg",
    "Jason"
];

// Adding elements to the end of the array

players.push("Vladimir");

// Adding elements to the start of the array

players.unshift("Alexios");

main.innerHTML = players;

const shoppingList = [
    "bread",
    "butter",
    "ice-cream",
    "crab sticks"
];

// Removing elements from the start of the array

let firstItem = shoppingList.shift();
console.log(shoppingList);

// Removing elements from the end of the array

let lastItem = shoppingList.pop();
console.log(shoppingList);

// Combining two arrays (spread)

const cats = ["Tom", "Murka", "Basya"];
const dogs = ["Richard", "Boy", "Arni"];
const pets = [...cats, ...dogs];

main.innerHTML = pets[5];

const scores = [34, 12, 13, 37, 22];
let total = 0;

for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}

console.log(total / scores.length);



