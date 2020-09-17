// Asking a name

// const name = prompt('Welcome, what\'s your name?');

// Asking to wait

// const greeting = () => alert(`Hello, ${name}, can you wait 5 secs, please?`);
//
// greeting();
// window.setTimeout(() => {
//     alert('Good, u have patience!');
// }, 5000);

// Setting timeout (call back functions)


// Change heading color

const myHeading = document.getElementById('myHeading');
const headingButton = document.getElementById('headingButton');
const headingColor = document.getElementById('headingColor');

headingButton.addEventListener('click', () => {
    myHeading.style.color = headingColor.value;
    headingColor.value = '';
});

// Hide Cart List

const toggleButton = document.getElementById('toggleButton');
const listDiv = document.querySelector('.list');

toggleButton.addEventListener('click', () => {
    if (listDiv.style.display === 'none') {
        toggleButton.textContent = 'Hide List Items';
        listDiv.style.display = 'block';
    } else {
        toggleButton.textContent = 'Show List Items';
        listDiv.style.display = 'none';
    }
});

// Change list squares to checkboxes

const itemList = document.getElementsByClassName('itemBuy');
for (let i = 0; i < itemList.length; i++) {
    itemList[i].type = 'checkbox';
}

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

// const removeItemButton = document.getElementById('removeItemButton');
//
// removeItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:first-child');
//     ul.removeChild(li);
// });

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

// Removing list items

listDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        let li = event.target;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});


// Change list items heading

const listHeading = document.querySelector('h4');
const listHeadingOption = document.querySelector('input#listHeadingOption');
const listHeadingButton = document.querySelector('button#listHeadingButton');

listHeadingButton.addEventListener('click', () => {
    console.log('hey');
    listHeading.textContent = listHeadingOption.value + `:`;
});


