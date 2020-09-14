// 1: Set the text of the <h1> element

const textH = document.querySelector('h1');
textH.textContent = 'Saturday Activities';

// 2: Set the color of the <h1> to a different color

const colorH = document.querySelector('h1');
colorH.style.color = 'steelblue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag

const contentDesc = document.querySelector('.desc');
contentDesc.innerHTML = '<h4>Things to Do:</h4>';

// 4: Set the class of the <ul> to 'list'

const classList = document.querySelector('ul');
classList.className = 'list';

// 5: Create a new list item and add it to the <ul>
const newLi = document.createElement('li');
newLi.innerHTML = '<input> Play video games';
classList.appendChild(newLi);

// 6: Change all <input> elements from text fields to checkboxes

const listInput = document.getElementsByTagName('input');
for (let i = 0; i < listInput.length; i++) {
    listInput[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
const extraDiv = document.querySelector('.extra');
extraDiv.appendChild(deleteButton);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button

const container = document.querySelector('.container');
deleteButton.addEventListener('click', () => {
    container.removeChild(extraDiv);
});
