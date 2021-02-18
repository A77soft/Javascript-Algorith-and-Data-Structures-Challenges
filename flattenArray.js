function steamrollArray(arr) {
    var flat = [];
    arr.forEach(flatten);
    return flat;
    
    function flatten(element) {
      if (!Array.isArray(element)) {
        flat.push(element);
        } else {
        element.forEach(flatten);
        }
      }
  }