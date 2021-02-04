function sumOfRange(arr) {
    let newArr = [];
    let sum = 0;
    let reducer = (accumulator, currentValue) => accumulator + currentValue; 
  
    arr.sort((a, b) => a - b);
  
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
    }
  
    sum = newArr.reduce(reducer);
  
    return sum;
  }
  