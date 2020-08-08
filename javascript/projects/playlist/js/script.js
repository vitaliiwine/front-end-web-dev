const main = document.querySelector('main');

const playlist = [
    "Fuk Faces(feat. Future)",
    "Hate The Other Side(feat. Polo G)",
    "Denied in UK",
    "Pop it",
    "No Slow Money(feat. Future)",
    "Bankroll",
    "Righteous",
    "Watch Yo Homie",
    "Titanic",
    "Share My",
    "Outro"
];

function createPlaylist(arr) {
    let songs = '';
    for (let i = 0; i < arr.length; i++) {
        songs += `<li>${arr[i]}</li>`;
    }
    return songs;
}

console.log(createPlaylist(playlist));
main.innerHTML = `
<ol>${createPlaylist(playlist)}</ol>`;

