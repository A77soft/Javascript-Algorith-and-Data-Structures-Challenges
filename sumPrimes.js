//1st Method
function sumPrimesOne(num) {
    let result = 0;
    function checkPrimes(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
    for (let i = 2; i <= num; i++) {
      if (checkPrimes(i)) {
        result += i;
      }
    }
    return result;
  }
  //2nd Method
  function sumPrimesTwo(num) {
      let result = [];
      for (let i = 2; i <= num; i++) {
          for (let j = 2; j <= i; j++) {
              if (i === j) {
                  result.push(i);
              }
              if (i % j === 0) {
                  break;
              }
          }
      }
      return result.reduce((a, b) => a + b);
  }