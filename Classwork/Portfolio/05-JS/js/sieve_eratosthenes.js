/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

const sieve = (n) => {
  const array = [];
  const primes = [];

  // everyone starts as a possible prime, the loops below cross out the ones that are not
  for (let i = 2; i <= n; i++) {
    array[i] = true;
  }

  // cross out the multiples of every number still standing. Starting at i*i because
  // the smaller ones were already crossed out by a smaller factor
  for (let i = 2; i * i <= n; i++) {
    if (array[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        array[j] = false;
      }
    }
  }

  // whatever survived is a prime
  for (let i = 2; i <= n; i++) {
    if (array[i]) {
      primes.push(i);
    }
  }

  return primes;
};

// reads the number from the page and writes the primes into the primes span
const showPrimes = () => {
  const n = parseInt(document.getElementById("num").value);
  const label = document.getElementById("primes");
  if (isNaN(n) || n < 2) {
    label.textContent = "Write a whole number of 2 or more.";
    return;
  }
  label.textContent = sieve(n).join(", ");
};
