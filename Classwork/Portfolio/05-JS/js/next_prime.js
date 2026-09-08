const checkPrime = () => {
  const id = document.getElementById("num");
  const number = parseInt(id.value);
  const maxNum = 1299827;
  if (number < maxNum && !isNaN(number)) {
    for (let i = number + 1; i < maxNum; i++) {
      // the first prime found walking up is the answer, so stop right there
      if (isPrime(i)) {
        document.getElementById("nextPrimeLbl").textContent = i;
        return;
      }
    }
  } else {
    window.alert("Please Enter Number Below 1299827 or Enter A Valid Integer");
    id.value = "";
  }
};

const isPrime = (num) => {
  // without this, 0 and 1 would pass as primes
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
