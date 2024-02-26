function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    // store the value of the current index
    currentVal = arr[i];

    // run loop as long as the index of j is greater than the current value to insert the val in correct place; using var for scope
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // swap
      arr[j + 1] = arr[j];
    }
    // insert val at correct spot
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([5, 3, 26, 14]));
