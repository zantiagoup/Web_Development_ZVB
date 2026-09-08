/*
Pig Latin
*/

const igpayAtinlay = (str) => {
  const returnArray = [];
  // one word per position, that way each one is translated on its own
  const wordArray = str.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];
    let beginning = word.charAt(0);

    // words starting with a vowel only get the "way" ending
    if (/[aeiouAEIOU]/.test(beginning)) {
      returnArray.push(word + "way");
      continue;
    }

    for (let ii = 1; ii < word.length; ii++) {
      if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
        break;
      } else {
        beginning += word.charAt(ii);
      }
    }

    // the consonants at the front move to the back and "ay" closes the word
    returnArray.push(word.slice(beginning.length) + beginning + "ay");
  }
  return returnArray.join(" ");
};

// reads the text from the page and writes the translation into the pigLatLbl span
const showPigLatin = () => {
  const str = document.getElementById("txtVal").value;
  document.getElementById("pigLatLbl").textContent = igpayAtinlay(str);
};

// Some examples of expected outputs
console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"
