function spinalCaseOne(str) {
    let regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
  }

function spinalCaseTwo(str) {
  return str
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\s+|_+/g, "-")
        .toLowerCase();
}
