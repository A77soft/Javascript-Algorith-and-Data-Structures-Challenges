function sortedUnion(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    let argumentsArray = arguments[i];
    for (let j = 0; j < argumentsArray.length; j++){
      let indexValue = argumentsArray[j];
      if (newArr.indexOf(indexValue) === -1) {
        newArr.push(indexValue);
      }
    }
  }
  return newArr;
}