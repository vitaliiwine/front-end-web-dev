const person = {
    name: 'Vitalii',
    city: 'Bat Yam',
    age: 27,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

const surfObject = object => {
    for (let [key, val] of Object.entries(object)) {
        console.log(key + ': ' + val);
    }
};

surfObject(person);

const renderPerson = person => {
    const div = document.createElement('div');  // Creating

    div.className = 'col-md-4 col-md-3';

    let html = `<div class="card text-dark">
                    <div class="card-header">
                        <strong>${person.name}</strong>
                    </div>
                    <div class="card-body">
                  `;

    for (let [key, val] of Object.entries(person)) {
        if (Array.isArray(val)) {
            html += `<h5>${key}</h5><ul>`;
            val.forEach(v => {
                html += `<li>${v}</li>`
            })
        } else
            html += `<p><b>${key}: </b><span>${val}</span></p>`
    }

    html += `  </div>
                </div>`;

    div.innerHTML = html;

    return div
};

const persons = [
    {
        name: 'Vitalii',
        city: 'Bat Yam',
        age: 27,
        isStudent: true,
        skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
        name: 'Alex',
        city: 'Tel Aviv',
        age: 22,
        isStudent: true,
        skills: ['JavaScript', 'Typescript', 'Angular']
    },
    {
        name: 'Iraklii',
        city: 'Ramat Gan',
        age: 26,
        isTeacher: true,
        skills: ['Node', 'Vue', 'JavaScript']
    }

];

persons.forEach(person => {
    document.getElementById('persons').appendChild(renderPerson(person))
});