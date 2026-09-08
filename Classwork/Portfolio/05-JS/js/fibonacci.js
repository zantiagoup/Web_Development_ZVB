/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
const memo = {};
const fibonacci = () => {
  const n = parseInt(document.getElementById("num").value);
  const label = document.getElementById("fibonacciLbl");
  // the input is text, so anything can be typed in there
  if (isNaN(n) || n < 0) {
    label.textContent = "Write a positive whole number.";
    return;
  }
  const val = f(n);
  label.textContent = val;
  return val;
};

const f = (n) => {
  // Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    return memo[n];
  }
  // 0 and 1 are the start of the series, the rest is the sum of the two before it
  const value = n < 2 ? n : f(n - 1) + f(n - 2);
  memo[n] = value;

  return value;
};
