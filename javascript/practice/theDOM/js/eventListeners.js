const heading = document.querySelector('#heading');
const headingColorValue = document.querySelector('#heading-color-value');
const changeHeadColorButton = document.querySelector('#change-head-color-b');
const hideListButton = document.querySelector('#hide-list-b');
const ulList = document.querySelector('ul');
const listHeading = document.querySelector('p.description');
const listInput = document.querySelector('input.description');
const listButton = document.querySelector('button.description');
const inputAddItem = document.querySelector('#add-item-input');
const addItemButton = document.querySelector('#add-item-b');


// Change heading color

changeHeadColorButton.addEventListener('click', () => {
    heading.style.color = headingColorValue.value;
    headingColorValue.value = '';
});

// Hide items list

hideListButton.addEventListener('click', () => {
    if (ulList.style.display === 'none') {
        hideListButton.textContent = 'Hide List';
        ulList.style.display = 'block';
    } else {
        hideListButton.textContent = 'Show List';
        ulList.style.display = 'none';
    }
});

// Change list heading

listButton.addEventListener('click', () => {
    listHeading.textContent = listInput.value + ':';
    listHeading.value = '';
});

// Add list item

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = inputAddItem.value;
    ul.appendChild(li);
    inputAddItem.value = '';
});