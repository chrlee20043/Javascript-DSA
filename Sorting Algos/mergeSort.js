// Merge two sorted arrays

function mergeSort(arr1, arr2) {
  let newArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    // if arr2[j] greater than arr1[i], push the smaller value into the newArr and increment i
    if (arr2[j] > arr1[i]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      // if arr1[i] is greater than arr2[j], push the smaller value into the newArr and increment j
      newArr.push(arr2[j]);
      j++;
    }
  }
  // while i < length of arr1, push arr1[i] into newArr and increment i (push remaining values into the newArr)
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  // while j < length of arr2, push arr2[j] into newArr and increment j (push remaining values into the newArr)

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

// console.log(mergeSort([100, 200], [4, 7, 11, 24]));

// Recursive call
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSort(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
