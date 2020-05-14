// Global scope

const person = 'Lee';

function greeting() {
    // function scope
    const person = 'Meg';
    alert(`Hi, ${person}!`);
}

greeting();
alert(`Hi, ${person}!`);
greeting();