// The program checks if the input forms are filled

// Declaring a function to check inputs

function isFieldEmpty() {
    const field = document.querySelector('#info');
    if (field.value === '') {
        return true;
    } else {
        return false;
    }
}

// Storing returned value from function to a variable

const fieldTest = isFieldEmpty();

if (fieldTest === true) {
    alert("Please provide the info required")
}