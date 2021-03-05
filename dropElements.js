//1st Implementation
function dropElements(arr, func) {
    while (!func(arr[0])) {
      arr.shift()
    }
    return arr;
}

//2nd Implementation
function dropElements(arr, func) {
 while (func(arr[0])===false){
  arr.splice(0, 1);
  }
 return arr;
}