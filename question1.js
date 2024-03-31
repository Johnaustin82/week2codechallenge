// function to swap the case of the string
function swappedCase(string) {

//Set an empty string to store the swapped cases
    let swapped = '';

// loop through each char in the string 
    for (let i = 0; i < string.length; i++) {
// the character
      let char = string[i];

// check if character is uppercase
      if (char === char.toUpperCase()) {
// if uppercase swap to lowercase and add to the swapped string
        swapped += char.toLowerCase();

      } else {
// if lowercase convert to uppercase and add to the swapped string
        swapped += char.toUpperCase();
      }
    }

//return the swapped string 
    return swapped;
  }
// testing for the output
  console.log(swappedCase('The Quick Brown Fox'));
