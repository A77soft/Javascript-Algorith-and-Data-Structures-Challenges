function returnSplicedArray(arr1, arr2, n) {
    let newArr = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      newArr.splice(n, 0, arr1[i]);
      n++;
    }
    return newArr;
  }