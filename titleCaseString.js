function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let result = arr.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    return result.join(" ")
  }