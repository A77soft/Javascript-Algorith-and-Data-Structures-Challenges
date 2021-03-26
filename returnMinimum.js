function returnMinimum(val) {
    let array = Array.prototype.slice.call(arguments);
    array.sort((a, b) => a - b);
    let minimum = array[0];
    return minimum;
  }