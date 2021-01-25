function repeatString(str, num) {
    if (num <= 0) {
      return "";
    } else if (num === 1) {
      return str;
    } else {
      return str + repeatString(str, num - 1);
    }
  }
}