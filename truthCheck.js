//1st Method
function truthCheckOne(collection, pre) {
    for (var i = 0; i < collection.length; i++){
    if (collection[i][(pre)] === false || collection[i][(pre)] === 0 || collection[i][(pre)] === "" || collection[i][(pre)] === null || collection[i][(pre)] === undefined || Number.isNaN(collection[i][(pre)] )=== true){
    return false;
    }
    }
    return true;
   }

//2nd Method
function truthCheck(collection, pre) {
    let counter = 0;
    for (let i in collection) {
      if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
        counter++;
      }
    }
    return counter == collection.length; 
  }