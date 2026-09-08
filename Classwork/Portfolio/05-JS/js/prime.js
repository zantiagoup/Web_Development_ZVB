/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

const getPrimeFactors = (n) => {
  const sequence = [];

  // taking out every 2 first leaves n odd, so the next loop can jump two by two
  while (n % 2 === 0) {
    sequence.push(2);
    n = n / 2;
  }

  // past the square root of n there can not be another factor pair left
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    while (n % i === 0) {
      sequence.push(i);
      n = n / i;
    }
  }

  // what is left is a prime bigger than the square root, like the 13 of 30030
  if (n > 2) {
    sequence.push(n);
  }

  return sequence;
};

// reads the number from the page and writes the factors into the pf span
const showPrimeFactors = () => {
  const n = parseInt(document.getElementById("num").value);
  const label = document.getElementById("pf");
  if (isNaN(n) || n < 2) {
    label.textContent = "Write a whole number of 2 or more.";
    return;
  }
  label.textContent = getPrimeFactors(n).join(", ");
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));
