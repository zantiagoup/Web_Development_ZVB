// ==========================================
// 1. UI SELECTORS
// ==========================================
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate-btn');
const resultStatus = document.getElementById('result-status');

// ==========================================
// 2. TODO: BASIC CALLBACK MATH FUNCTIONS (Students write these)
// ==========================================

// TODO: Write "add" callback expression (a, b) => ...
const add = (a, b) => {
    return a + b;
};

// TODO: Write "subtract" callback expression (a, b) => ...
const subtract = (a, b) => {
    return a - b;
};

// TODO: Write "multiply" callback expression (a, b) => ...
const multiply = (a, b) => {
    return a * b;
};

// TODO: Write "divide" callback expression (a, b) => ...
// Rule: Guard against division-by-zero! Return an Error or string warning.
const divide = (a, b) => {
    //sanity check
    if (b === 0) {
        return 'Error: cant divide by zero';
    }
    return a / b;
};


// ==========================================
// 3. TODO: HIGHER-ORDER FUNCTION ENGINE (Students write this)
// ==========================================

// TODO: Write the "calculator" orchestrator function
// Arguments: numA (Number), numB (Number), callback (Function)
// Checks:
//   - Is numA and numB actually valid numbers?
//   - Is callback actually a function?
// Execution: Returns callback(numA, numB)


const calculate = (numA, numB, callbackFunction) => {
    if (isNaN(numA) || isNaN(numB)) {
        return 'Error: invalid numbers';
    }
    if (typeof callbackFunction !== 'function') {
        return 'Error: invalid called function';
    }
    return callbackFunction(numA, numB);
};


// ==========================================
// 4. TODO: EVENT OBSERVER & INTEGRATION WIRING (Students write this)
// ==========================================
calculateBtn.addEventListener('click', () => {
    // alert('Hello there!'); -- no need no more

    // TODO: Extract values from the inputs and parse them as floats.
    const number1 = parseFloat(num1Input.value);
    const number2 = parseFloat(num2Input.value);

    // TODO: Retrieve the selected operation string value.
    const operation = operationSelect.value;

    // TODO: Match the selected operation string to its corresponding function reference.
    let callbackFunction;
    switch (operation) {
        case 'add':
            callbackFunction = add;
            break;
        case 'subtract':
            callbackFunction = subtract;
            break;
        case 'multiply':
            callbackFunction = multiply;
            break;
        case 'divide':
            callbackFunction = divide;
            break;
        default:
            callbackFunction = undefined;
    }

    // TODO: Execute the higher-order 'calculator' function with input values and the matched function reference.
    const result = calculate(number1, number2, callbackFunction);

    // A string coming back means something went wrong (our guards return text).
    const isError = typeof result === 'string';

    // TODO: Update resultStatus text, toggling classes (e.g., alert-success vs alert-danger) based on outcomes!
    resultStatus.textContent = result;
    resultStatus.className = isError
        ? 'alert alert-danger' //false
        : 'alert alert-success'; //true 
});
