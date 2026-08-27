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
    // JS does not throw on division by zero, it returns Infinity. Throw it ourselves.
    if (b === 0) {
        throw new Error('You cannot divide by zero');
    }
    return a / b;
};