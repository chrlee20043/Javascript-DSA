function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // store first element as smallest value
    let smallest = i;

    // compare item to next item in array until you find a smaller number
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        // if a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array

        smallest = j;
      }
    }
    // if the 'minimum' is not the value (index) you initially began with, swap the two values
    if (i !== smallest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  // repeat until the array is sorted
  return arr;
}

console.log(selectionSort([4, 2, 11, 35, 26]));
