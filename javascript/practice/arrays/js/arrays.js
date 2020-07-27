// ADD ELEMENTS

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

// REMOVE ELEMENTS

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

// Combining two arrays (SPREAD)

const cats = ["Tom", "Murka", "Basya"];
const dogs = ["Richard", "Boy", "Arni"];
const pets = [...cats, ...dogs]

main.innerHTML = pets;

