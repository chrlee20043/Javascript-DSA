function pivot(arr, start = 0, end = arr.length - 1) {
  // swap function
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // pivot is the first element in array
  let pivot = arr[start];
  // swap index keeps track of the index we want to swap the start element to
  let swapIdx = start;

  // Start the loop at the second element
  for (let i = start + 1; i < arr.length; i++) {
    // compare pivot to the next element in array
    if (pivot > arr[i]) {
      // increment the counter keeping track of the correct index of the first element
      swapIdx++;
      // swap the elements at swapIdx and i (which is the next element after comparing), ex. swap 2 and 8 since 8 > 2
      swap(arr, swapIdx, i);
    }
  }
  // at end, move the start index to the correct index
  swap(arr, start, swapIdx);
  return swapIdx;
}

// recursive function

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    // pivotIndex - 1 to not include pivotIndex
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
