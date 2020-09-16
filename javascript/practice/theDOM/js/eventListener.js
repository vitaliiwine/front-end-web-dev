// Change list squares to checkboxes

const itemList = document.getElementsByClassName('itemBuy');
for (let i = 0; i < itemList.length; i++) {
    itemList[i].type = 'checkbox';
}

// Asking a name

const name = prompt('Welcome, what\'s your name?');

// Asking to wait

const greeting = () => alert(`Hello, ${name}, can you wait 5 secs, please?`);

greeting();

// Setting timeout (call back functions)

window.setTimeout(() => {
    alert('Good, u have patience!');
}, 5000);

// Change heading color

// Selecting an HTML element

const myHeading = document.getElementById('myHeading');
const headingButton = document.getElementById('headingButton');
const headingColor = document.getElementById('headingColor');

// Adding event listener

headingButton.addEventListener('click', () => {
    myHeading.style.color = headingColor.value;
    headingColor.value = '';
});

// Hide Cart List

const toggleButton = document.getElementById('toggleButton');
const listDiv = document.querySelector('.list');

toggleButton.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleButton.textContent = 'Hide List Items';
        listDiv.style.display = 'block';
    } else {
        toggleButton.textContent = 'Show List Items';
        listDiv.style.display = 'none';
    }
});

// Add List Items

const addItemInput = document.getElementById('addItemInput');
const addItemButton = document.getElementById('addItemButton');

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('li')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

// Remove List Items

const removeItemButton = document.getElementById('removeItemButton');

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:first-child');
    ul.removeChild(li);
});

// Change list items color

let myList = document.getElementsByTagName('li');
const colorListButton = document.getElementById('colorListButton');
const listColor = document.getElementById('listColor');

colorListButton.addEventListener('click', () => {
    for (let i = 0; i < myList.length; i++) {
        myList[i].style.color = listColor.value;
    }
    listColor.value = '';
});

// Uppercase/ lowercase

for (let i = 0; i < myList.length; i++) {
    myList[i].addEventListener('mouseover', () => {
        myList[i].textContent = myList[i].textContent.toUpperCase();
    });
    myList[i].addEventListener('mouseout', () => {
        myList[i].textContent = myList[i].textContent.toLowerCase();
    });
}


// Change list items heading

const listHeading = document.querySelector('h4');
const listHeadingOption = document.querySelector('input#listHeadingOption');
const listHeadingButton = document.querySelector('button#listHeadingButton');

listHeadingButton.addEventListener('click', () => {
    console.log('hey');
    listHeading.textContent = listHeadingOption.value + `:`;
});


