const mars = {
    name: 'Mars',
    diameter: '4,212 mi',
    moons: '2',
    temp: '-153 to 20°C',
    orbitDays: '687',
    orbitYears: '1.9',
    description: 'The fourth planet from the Sun, smallest planet in the solar system. ' +
        'Named after the Roman god of war, Mars is also often described as the “Red Planet” ' +
        'due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
    facts: 'Mars has the largest dust storms in the solar system. They can last for months and cover the entire planet. ' +
        'On Mars the Sun appears about half the size as it does on Earth.'
};

function createPlanetHTML(mars) {
    return `<div class="card">
        <div>
        <img src="img/mars.jpg" alt="${mars.name}">
        </div>
        <h2>${mars.name}</h2>
        <p>${mars.description}</p>
        <h3>Planet Profile</h3>
        <ul>
            <li><strong>Diameter: </strong>${mars.diameter}</li>
            <li><strong>Moons: </strong>${mars.moons}</li>
            <li><strong>Temperature: </strong>${mars.temp}</li>
            <li><strong>Orbit Period: </strong> ${mars.orbitDays} days + ${mars.orbitYears} years</li>
        </ul>
    <p>${mars.facts}</p>
</div>`
}

document.querySelector('body').innerHTML = createPlanetHTML(mars);