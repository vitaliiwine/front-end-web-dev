// Dynamic Object Properties

const dynamic = "engine";
const engineVol = "2.6";


let car = {
    name: "Suzuki",
    [dynamic]: engineVol
};

console.log(car);

// Simplifying "if" Statement

const condition = true;

function sayHello() {
    console.log('Hello!');
}

condition && sayHello();

// Replace Text

const txt = "Javascript javascript";

console.log(txt.replace(/java/gi, "vanilla"));


// Number ==> String, String ==> Number

const num = 10 + "";
console.log(typeof num);

const str = "1993";
console.log(+str);

// Arrays. Unique Integers Extraction

const arr = [1,1,1,2,2,2,3,4,4,4,5,6,6,6,7,8,8,8,8,0];

let un_arr = [...new Set(arr)];

print();

function print() {
    console.log(arr);
    console.log(un_arr);
}

// Arrays. Mixing Content

const arrToMix = [1,2,3,4,5,6,7,8,9,10];
console.log(arrToMix);
console.log(arrToMix.sort(function () {
    return Math.random() - 0.5
}));

// Arrays. Two Dimensional ==> Regular

const doubleArr_0 = [1,[2,3],4,[5,6],7,[8,9],10];
console.log(doubleArr_0);
const newDoubleArr_0 = [].concat(...doubleArr_0);
// const newDoubleArr_0 = doubleArr_0.flat();
console.log(newDoubleArr_0);

// Arrays. Change Array's Length

const doubleArr_1 = [1,[2,3],4,[5,6],7,[8,9],10];
console.log(doubleArr_1.length);

doubleArr_1.length = 5;
console.log(doubleArr_1.length);