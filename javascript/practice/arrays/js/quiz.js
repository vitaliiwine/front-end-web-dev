const quiz = [
    ["What's the form of the Earth?", "globe"],
    ["What's the hottest month in Israel?", "august"],
    ["What's the wettest month in Ukraine?", "october"],
    ["What's the name of the rock that's also a programming language?", "ruby"],
    ["What's HTML stand for?", "hyper text markup language"]
];

let correctAnswers = 0;

for (let i = 0; i < quiz.length; i++) {
    let question = quiz[i][0];
    let answer = quiz[i][1];
    let response = prompt(question);

    if (response.toLowerCase() === answer)
        correctAnswers++;
}

document.querySelector('main').innerHTML = `Hey, you've got ${correctAnswers} correct answer(s) out of ${quiz.length}`;