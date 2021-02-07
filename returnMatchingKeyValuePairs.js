function whatIsInAName(collection, source) {
  let srcKeys = Object.keys(source);
  
  return collection.filter(obj => {
    return srcKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  }); 
}