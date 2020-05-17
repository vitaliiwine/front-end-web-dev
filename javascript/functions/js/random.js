// The program returns a random number between two numbers

/**
 * Returns a random number between two numbers
 *
 * @param {number} lower - The lowest number.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

const twoNumRandom = (lower, upper) => {
    if (isNaN(lower) || isNaN(upper)) {
        throw Error("One of the inputs isn't a number, please, provide numbers.")
    } else
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Input

const input = () => console.log(twoNumRandom(30,  50));
input();