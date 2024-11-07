**Title: Binary Search for Target Element in a Sorted Array**

**Objective:**
In this coding challenge, you will write a JavaScript function that implements binary search to find the index of a specific target element within a sorted array. The function should return the index where the target is found or -1 if the target is not in the array.

For example, given the following sorted input array:
```js
const input = [-60, -2, 0, 1, 3, 4, 5, 9, 12, 18, 27, 32, 34, 39, 1000];
const targetElement = 39;

binarySearch(input, targetElement);
```

The expected output should be:
```js
Index of 39: 13
```

If the element is not found:
```js
Index of 50: -1
```

<details>
<summary>Hints</summary>

1. Define a function `binarySearch(array, target)` that takes a sorted array `array` and a target value `target`.
2. Initialize two variables, `left` and `right`, to keep track of the start and end of the range being searched.
3. Use a `while` loop to continue searching as long as `left` is less than or equal to `right`.
4. Calculate the middle index inside the loop and compare the element at the middle index with the target.
5. If the element at the middle index is equal to the target, return the index.
6. If the target is smaller than the element at the middle index, move the `right` index to one less than the middle index.
7. If the target is larger than the element at the middle index, move the `left` index to one more than the middle index.
8. If the target is not found by the end of the loop, return -1.
9. Use console.log to display the index returned by your `binarySearch` function.
</details>
