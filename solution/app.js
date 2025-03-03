console.log("Hello world!")

/**
 * Grabs the numbers and operations from document, performs the calculation,
 * and alerts the user of the result. If any of the inputs are empty, it will
 * alert the user to complete the form instead.
 */
function calculate() {
    let n1 = getNumberInput("num1-input");
    let n2 = getNumberInput("num2-input");
    let op = document.getElementById("op-select").value;

    let isValid = validate(n1, n2);
    if (isValid) {
        const res = getResult(n1, n2, op);
        document.getElementById(`result-text`).innerText = `The result of ${n1} ${op} ${n2} is ${res}`;
    } else {
        alert("Please enter a missing number!");
    }
}

/**
 * Called whenever its button is clicked! This function
 * should reset all form inputs.
 */
function reset() {
    document.getElementById(`num1-input`).value = "";
    document.getElementById(`num1-input`).className = "form-control";
    document.getElementById(`num1-error-text`).innerText = "";

    document.getElementById(`num2-input`).value = "";
    document.getElementById(`num2-input`).className = "form-control";
    document.getElementById(`num2-error-text`).innerText = "";

    document.getElementById(`op-select`).value = "Add";

    document.getElementById(`result-text`).innerText = "";
}

/**
 * Validates the form, setting (or resetting)
 * any error text as appropriate.
 * @param {number || null} n1 the first number
 * @param {number || null} n2 the second number
 * @returns {boolean} true if valid, false otherwise
 */
function validate(n1, n2) {
    let hasErrors = (n1 === null || n2 === null);

    if (n1 === null) {
        document.getElementById(`num1-input`).className = "form-control is-invalid";
        document.getElementById(`num1-error-text`).innerText = "Please enter a number";
        document.getElementById(`num1-error-text`).style.color = "red";
    } else {
        document.getElementById(`num1-input`).className = "form-control";
        document.getElementById(`num1-error-text`).innerText = "";
    }

    if (n2 === null) {
        document.getElementById(`num2-input`).className = "form-control is-invalid";
        document.getElementById(`num2-error-text`).innerText = "Please enter a number";
        document.getElementById(`num2-error-text`).style.color = "red";
    } else {
        document.getElementById(`num2-input`).className = "form-control";
        document.getElementById(`num2-error-text`).innerText = "";
    }

    return !hasErrors;
}


/**
 * Gets the number of an input if it exists, otherwise returns null
 * @param {string} name the ID of the HTML element
 * @returns {number || null} the input as a number, or null if empty
 */
function getNumberInput(name) {
    const val = document.getElementById(name).value;
    if (val === '') {
        return null;
    } else {
        return parseFloat(val);
    }
}

/**
 * Returns the result of x and y based on the operation
 * @param {number} x The first operand
 * @param {number} y The second operand
 * @param {string} operation The operator
 * @returns {number} the result
 */
function getResult(x, y, operation) {
    let result;
    if (operation === "Add") {
        result = x + y;
    } else if (operation === "Subtract") {
        result = x - y;
    } else if (operation === "Multiply") {
        result = x * y;
    } else if (operation === "Divide") {
        result = x / y;
    } else {
        result = 0; // This should never happen!
    }
    return result;
}
