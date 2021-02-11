//1st Method
function pairedElementOne(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      switch(str[i]) {
        case "A":
          arr.push(["A", "T"]);
          break;
        case "T":
          arr.push(["T", "A"]);
          break;
        case "C":
          arr.push(["C", "G"]);
          break;
        case "G":
          arr.push(["G", "C"]);
          break;
      }
    }
    return arr;
  }

//2nd Method
function pairedElementTwo(str) {
  let arr = [];
  let search = function(char) {
    switch(char) {
      case "A":
        arr.push(["A", "T"]);
        break;
      case "T":
        arr.push(["T", "A"]);
        break;
      case "C":
        arr.push(["C", "G"]);
        break;
      case "G":
        arr.push(["G", "C"]);
        break;
    }
  }
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return arr;   
}