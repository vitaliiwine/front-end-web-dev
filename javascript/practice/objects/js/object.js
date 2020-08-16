const person = {
    name: 'Vitalii',
    city: 'Bat Yam',
    age: 27,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

const surfObject = (object) => {
    for (let prop of Object.entries(object)) {
        console.log(`${prop[0]}: ${prop[1]}`);
        const personProps = Object.keys(person);
        const personValues = Object.values(person);
        const result = `
        \`${prop[0]}: ${prop[1]}\`
            // ${personProps}: ${personValues}
        `;

        document.querySelector('.main').innerHTML = result;

    }
};

person.nickname = 'Wine';

const hello = `<h1>Hello, my name is ${person.name} and I live in ${person.city}.</h1>
<h2>Most know me as ${person.nickname}. I've got ${person.skills.length} skills:
${person.skills.join(', ')}.</h2>`;

const printText = (message) => {
    document.querySelector('.secondary').innerHTML = message;
};

// printText(hello);
surfObject(person);

// Keys

const person = {
    name: 'Vitalii',
    city: 'Bat Yam',
    age: 27,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

const personProps = Object.keys(person);
console.log(personProps);

// Values

const person = {
    name: 'Vitalii',
    city: 'Bat Yam',
    age: 27,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

const personVals = Object.values(person);
console.log(personVals);

// Length

const person = {
    name: 'Vitalii',
    city: 'Bat Yam',
    age: 27,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

console.log( Object.keys(person).length );

const name = {
  firstName: 'Gregor',
  lastName: 'McCullum'
};

const role = {
  title: 'Front-End Developer',
  skills: ['js', 'html', 'css'],
  isTeacher: true
};

const person = {
    ...name,
    ...role
};

console.log(person);

