//Method One
function palindromeChecker(str) {
    str = str.replace(/[^a-z0–9]+/gi, "").toLowerCase();
    let reversedStr = str.split("").reverse().join("");
    if (reversedStr === str) {
      return true;
    } 
    return false;
  }

//Method Two
function palindromeCheckerTwo(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}