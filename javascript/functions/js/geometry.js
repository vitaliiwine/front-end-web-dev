// The function calculates the area of a rectangle

function areaRectangle(width, height) {
    return width * height;
}

// The function calculates the volume of a rectangular prism

function volumeRecPrism(width, height, lenght) {
    return width * height * lenght;
}

// The function calculates the area of a circle

function areaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// The function calculates the volume of a sphere

function volumeSphere(radius) {
    return (4/3) * Math.PI * Math.pow(radius, 3);
}

// Templates for output each function

console.log(`The area of a rectangle is ${areaRectangle()}
            The volume of a rectangular prism is ${volumeRecPrism()}
            The area of a circle is ${areaCircle()}
            The volume of a sphere is ${volumeSphere()}
`);