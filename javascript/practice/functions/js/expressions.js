// The program checks if the input forms are filled

// Implementing a function expression to check inputs

const isFieldEmpty = function() {
    const field = document.querySelector('#info');
    if (!field.value) {
        return true;
    }
};

// Storing returned value from function to a variable

const fieldTest = isFieldEmpty();

// Preventing inputs from being left empty

if (fieldTest) {
    alert("Please provide the info required.");
}