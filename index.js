// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Target found at mid index
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

const input = [-60, -2, 0, 1, 3, 4, 5, 9, 12, 18, 27, 32, 34, 39, 1000];

const targetElement = 39;

console.log(`Index of ${targetElement}: ${binarySearch(input, targetElement)}`);

const missingTargetElement = 50;

console.log(
  `Index of ${missingTargetElement}: ${binarySearch(
    input,
    missingTargetElement
  )}`
);
