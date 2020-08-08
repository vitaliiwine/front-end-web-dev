const people = [
    "Tom",
    "Bob",
    "Vlad",
    "Keren",
    "Debrie",
    "Nyjah",
    "Chris"
];

let personIndex = people.indexOf('Tom'); // 0

if (personIndex) {
    console.log(`${people[personIndex]} is in the array  at index ${personIndex}.`);
}