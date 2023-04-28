let score = 85;

if (score >= 88 && score < 100) {
    console.log("Success - AA");
} else if (score >= 81 && score < 88) {
    console.log("Success - BA");
} else if (score >= 74 && score < 81) {
    console.log("Success - BB");
} else if (score >= 67 && score < 74) {
    console.log("Success - CB");
} else if (score >= 60 && score < 67) {
    console.log("Success - CC");
} else if (score >= 0 && score < 60) {
    console.log("Fail - FF");
} else {
    console.log("Invalid score");
}

//----------------------------------------------------------------------------

let value = 10;

let sum = 0;
for (let i = 0; i <= value; i++) {
    sum += i;
}
console.log("The sum of all numbers from 0 to " + value + " is " + sum);

//------------------------------------------------------------------------------

let num = 7;

for (let i = 2; i <= Math.sqrt(num); i++) {

    if (num % 2 === 0) {
        console.log(num + " is a prime number.");
        break;
    }
    else {
        console.log(num + " is not a prime number.");
    }

}

//-------------------------------------------------------------------------------

let from = 3;
let to = 12;

for (let i = from; i <= to; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && i > 1) {
    console.log(i + " is a prime number.");
  }
}
