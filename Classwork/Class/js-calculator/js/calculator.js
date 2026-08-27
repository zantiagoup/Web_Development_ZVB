// ==========================================
// 1. UI SELECTORS
// ==========================================
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculate-btn');
const resultStatus = document.getElementById('result-status');




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
    //sanity
    if (isNaN(numA) || isNaN(numB)) {
        throw new Error('Invalid numbers');
    }
    if (typeof callbackFunction !== 'function') {
        throw new Error('Invalid callback function');
    }

    return callbackFunction(numA, numB);
};



// ==========================================
// 4. TODO: EVENT OBSERVER & INTEGRATION WIRING (Students write this)
// ==========================================
calculateBtn.addEventListener('click', () => {
    try {
        // TODO: Extract values from the inputs and parse them as floats.
        const number1 = parseFloat(num1Input.value);
        const number2 = parseFloat(num2Input.value);

        // TODO: Retrieve the selected operation string value.
        //input sanity
        const operation = operationSelect.value;

        if (num1Input.value === '' || num2Input.value === '') {
            throw new Error('Introduce a number');
        }
        if (!operation) {
            throw new Error('You must select an option');
        }

        // TODO: Match the selected operation string to its corresponding function reference.
        let callbackFunction;
        switch (operation) {
            case 'add': callbackFunction = add; break;
            case 'subtract': callbackFunction = subtract; break;
            case 'multiply': callbackFunction = multiply; break;
            case 'divide': callbackFunction = divide; break;
            default: throw new Error('Invalid selection');
        }

        // TODO: Execute the higher-order 'calculator' function with input values and the matched function reference.
        const result = calculate(number1, number2, callbackFunction);

        // TODO: Update resultStatus text, toggling classes (e.g., alert-success vs alert-danger) based on outcomes!
        resultStatus.textContent = `Result: ${result}`;
        resultStatus.className = 'alert alert-success';
    } catch (error) {
        resultStatus.textContent = error.message;
        resultStatus.className = 'alert alert-danger';
    }
});

console.log(add(3, 2));