const person = {
    name: 'Vitalii',
    city: 'Bat Yam',
    age: 27,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

person.nickname = 'Wine';

const hello = `<h1>Hello, my name is ${person.name} and I live in ${person.city}.</h1>
<h2>Most know me as ${person.nickname}. I've got ${person.skills.length} skills: 
${person.skills.join(', ')}.</h2>`;

const printText = (message) => {
    document.querySelector('main').innerHTML = message;
};

printText(hello);

