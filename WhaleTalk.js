// instantiate phrase to convert to whale talk
let input = 'falafel versus gyro';

// instatiate array of letters for whale talk
const vowels = ['a', 'e', 'i', 'o', 'u'];

// instatiate empty array to store translated phrase
let resultArray = [];

// iterate over all characters of input string
for (let inputChar = 0; inputChar < input.length; inputChar++){
  // push e and u into resultArray by default
  if(input[inputChar] == 'e' || input[inputChar] == 'u'){
    resultArray.push(input[inputChar]);
  }
  // compare each input character to the elements of vowels array
  for (let vowel = 0; vowel < vowels.length; vowel++){
    // add vowels from input string to resultArray
    if (input[inputChar] === vowels[vowel]){
      resultArray.push(input[inputChar]);
    }
  } // end of vowel loop
} // end of inputChar loop

// test iterations
console.log('Test iterations for input phrase "Falafel versus gyro" ');
console.log('Expected vowels in resultArray: a, a, e, e, e, e, u, u, o');
console.log(`Actual vowels in resultArray: ${resultArray}`);
console.log('-----------------------------');
// end of iterations testing

// format translated phrase
resultArray = resultArray.join('').toUpperCase();

// display final translation
console.log(`The translation of '${input}' to whale talk is: ${resultArray}`);
