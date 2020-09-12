// Selecting an HTML element

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');

// Adding event listener

myButton.addEventListener('click', () => {
    myHeading.style.color = 'tomato';
});
