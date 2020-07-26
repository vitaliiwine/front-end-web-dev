// 100 random numbers in bulbs

const main = document.querySelector('main');
let html = '';

for (let i = 5; i <= 100; i++) {
    html += `<div>${i}</div>`;
}

main.innerHTML = html;

