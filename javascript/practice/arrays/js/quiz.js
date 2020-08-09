const quiz = [
    ["What's the form of the Earth?", "globe"],
    ["What's the hottest month in Israel?", "august"],
    ["What's the wettest month in Ukraine?", "october"],
    ["What's the name of the rock that's also a programming language?", "ruby"],
    ["What's HTML stand for?", "hyper text markup language"]
];

let correct = [];
let incorrect = [];

for (let i = 0; i < quiz.length; i++) {
    let question = quiz[i][0];
    let answer = quiz[i][1];
    let response = prompt(question);

    if (response.toLowerCase() === answer) {
        correct.push(question);
    } else incorrect.push(question);
}

function createList(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    } return items;
}

let html = `
    <h1>Hey, you've got these ${correct.length} question(s) right, good job!</h1>
    <ol>${createList(correct)}</ol>
    
    <h1>Hey, you've got these ${incorrect.length} question(s) wrong, better luck next time!</h1>
    <ol>${createList(incorrect)}</ol>
`;


document.querySelector('main').innerHTML = html;