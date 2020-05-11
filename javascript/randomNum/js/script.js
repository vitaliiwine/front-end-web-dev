/* The program collects a number and returns a random one
 where the collected number is the highest possible */

// Collecting input

alert("Hey, wanna know how many lovers your gf has?");
const input = prompt("Ok, just give me any number :)");

if (isNaN(+input) || input === '') {
    alert("No, you need to provide me a number. Wanna try again? - Refresh.")
} else {

    // Declaring a method to generate a random num using user's input

    function randomNum() {
        return Math.floor(Math.random() * parseInt(input)) + 1;
    }

    // Output

    document.querySelector('main').innerHTML = `She's got ${randomNum()} lovers.`;

}







