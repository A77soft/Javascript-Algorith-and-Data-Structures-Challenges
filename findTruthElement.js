function findElement(arr, func) {
    let num;
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
    return undefined;
  }