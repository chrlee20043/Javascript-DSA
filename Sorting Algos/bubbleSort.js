// BUBBLE SORT ALGORITHM
// NOT OPTIMIZED O(n^2)

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];

//         // swap positions if arr[j] is greater than arr[j+1]
//         arr[j] = arr[j + 1];
//         // arr[j+1] is set to temp
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([3, 2, 10, 7]));

// OPTIMIZED VERSION (works better if array is almost sorted) O(n)

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        // swap positions if arr[j] is greater than arr[j+1]
        arr[j] = arr[j + 1];
        // arr[j+1] is set to temp
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([3, 2, 10, 7]));
