//First Method
function reverseString1(str) {
    let arr = str.split("");
    arr = arr.reverse();
    return arr.join("");
  }

  //Second Method
function reverseString2(str) {
    let arr = str.split("");
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr.join("");
}