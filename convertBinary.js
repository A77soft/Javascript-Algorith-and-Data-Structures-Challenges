function convertBinary(str) {
    let arr = str.split(" ");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(String.fromCharCode(parseInt(arr[i], 2)));
    }
    return result.join("");
  }