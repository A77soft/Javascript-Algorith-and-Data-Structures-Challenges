function returnLongestWordLength(str) {
    let arr = str.split(" ");
    let largestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
      if (largestNumber <= arr[i].length) {
        largestNumber = arr[i].length;
      }
    }
    return largestNumber;
  }