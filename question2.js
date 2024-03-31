// function to create an array of numbers within a specified range
function createArray(start, end) {

// Set an empty array to store the numbers
    let array = [];
// loop from the start value to end value
    for (let i = start; i <= end; i++) {
// push each number into the range of the array
      array.push(i);
    }

// return the created array
    return array;
  }

// testing for output
console.log(createArray(4, 7));
console.log(createArray(-4, 7));
  