function largestNumberArray(arr) {
  let newArr = [];
  let largestNumber;
  for (let i = 0; i < arr.length; i++) {
    largestNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (largestNumber <= arr[i][j]) {
        largestNumber = arr[i][j];
      }
    }
    newArr[i] = largestNumber;
  }
  return newArr;
}