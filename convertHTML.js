//1st Implementation
function convertHTML(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;
      case "\"":
        arr[i] = "&quot;";
        break;
      case "\'":
        arr[i] = "&apos;";
        break;
    }
  }
  return arr.join("");
}

//2nd Implementation
function convertHTMLTwo(str) {
  return str
        .replace(/&/g, "&amp;")
        .replace(/\</g, "&lt;")
        .replace(/\>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/\'/g, "&apos;");
}