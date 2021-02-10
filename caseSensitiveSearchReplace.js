function searchReplace(str, before, after) {
    let index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1);
    } else {
      after = after[0].toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
  }