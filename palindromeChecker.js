function palindromeChecker(str) {
    str = str.replace(/[^a-z0–9]+/gi, "").toLowerCase();
    let reversedStr = str.split("").reverse().join("");
    if (reversedStr === str) {
      return true;
    } 
    return false;
  }