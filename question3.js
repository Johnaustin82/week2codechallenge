// an array of numbers from 1 to 10
const numbers = [1,2,3,4,5,6,7,8,9,10];

// check if number is prime 
function numberIsPrime(num){

// if less than 2 its not a prime number
    if (num < 2){
      return false;
    }

// loop from 2 to the square root of the number to check for divisors 
    for (let i = 2; i <= Math.sqrt(num); i++){
// if number is not divisible by any number in the loop it's not a prime number
      if (num % i === 0) {
        return false;
      }
    }
// if divisible by any number in the loop its a prime number
    return true;
  }
  
// function to filter the prime numbers
  function filterPrimeNumbers(primes){
// Using the filter method to keep the prime numbers
    return primes.filter(numberIsPrime);
  }

// testing for output
console.log(filterPrimeNumbers(numbers));