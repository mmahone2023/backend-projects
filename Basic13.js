//The “Basic 13” The foundation “Basic 13” algorithm challenges.

//Print 1-255
//Print all the integers from 1 to 255.
//Solution below in block comments:

/* function evens() {
  for (x = 1; x < 256; x = x + 1) {
    console.log(x);
  }
}
evens(); */

//Print Sum 0-255
//Print integers from 0 to 255, and with each integer print the sum so far.
//Solution below in block comments:

/*let sum = 0;
for (let i=0; i<256; i=i+1) {
    sum = sum+i;
    console.log(i, sum)
 } */

// Find and Print Max
// Given an array, find and print its largest element.
//Solution below in block comments:

/* let myArray = [1,210,56,45,90]
 let result = Math.max(...myArray)
 console.log(result) */

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
//Solution below in block comments:

/* function allOdds() {
  let odds = [];
  for (let i = 1; i <= 255; i = i + 2) {
    odds.push(i);
  }
  return odds;
}
const result = allOdds();
console.log(result); */

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
//Solution below in block comments:

/* function greaterThanY(myArray, y) {
  let count = 0;
  for (let value of myArray) {
    if (value > y) count = count + 1;
  }

  return count;
}

let result = greaterThanY([1, 59, 5, 100, 104, 154, 550], 99);
console.log(result); */

// Max, Min, Average
// Given an array, print the max, min and average values for that array.
//Solution below in block comments:

/* function maxMinAverage(givenAnArray) {
  let max = givenAnArray[0];
  let min = givenAnArray[0];
  let sum = 0;
  for (let value of givenAnArray) {
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }

    sum = sum + value;
  }
  let average = sum / givenAnArray.length;

  console.log(max);
  console.log(min);
  console.log(average);
}

maxMinAverage([2, 3, 4, 5, 6, 0.5, 10, 90, 120]);
 */

// Swap String For Array Negative Values
// Replace any negative array values with ​'Dojo'​.
//Solution below in block comments:

/* function swap(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }

  return arr;
}
let arr = swap([-5, -7, -10, 1, 2, 3]);
console.log(arr) */

// Print Odds 1-255
// Print all odd integers from 1 to 255.
//Solution below in block comments:

/* function odds() {
  for (x = 1; x < 256; x += 2) {
    console.log(x);
  }
}
odds(); */

// Iterate and Print Array
// Iterate through a given array, printing each value.
//Solution below in block comments:

/* const printArray = (arr) => {
  arr.forEach((value) => {
    console.log(value);
  });
};
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printArray(values); */

// Get and Print Average
// Analyze an array’s values and print the average.
//Solution below in block comments:

/* const getAverage = (arr) => {
  let sum = 0;
  for (let value of arr) {
    sum = sum + value;
  }
  const average = sum / arr.length;
  console.log(average);
  console.log(sum);
};
getAverage([5, 10, 15, 20, 25, 30, 35]); */

// Square the Values
// Square each value in a given array, returning that same array with changed values.
//Solution below in block comments:

/* function square(arr) {
  const result = arr.map((value) => value * value);
  return result;
}
console.log(square([2, 4, 8, 16])); */

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
//Solution below in block comments:

/* function zero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }

  return arr;
}

console.log(zero([4, 5, -1, 4, -56, 4, 3])); */

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a ​'0'​ value at the end.
//Solution below in block comments:

/* function shiftForward(arr) {
  for (let i = 0; i < arr.length - 1; i++) { 
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
}
const result = shiftForward([0, 1, 1, 3, 5, 8, 13, 21])
console.log(result) */

/* function shift(arr) {
  arr.shift();
  arr.push(0);
  return arr;
}
console.log(shift([0, 1, 1, 3, 5, 8, 13, 21])); */
