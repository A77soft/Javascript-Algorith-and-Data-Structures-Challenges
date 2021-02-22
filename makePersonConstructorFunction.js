let Person = function(firstAndLast) {
    let fullName = firstAndLast.split(" ");
    this.getFirstName = function() {
      return fullName[0];
    };
    this.getLastName = function() {
      return fullName[1];
    };
    this.getFullName = function() {
      return fullName.join(" ");
    };
    this.setFirstName = first => {
      fullName[0] = first;
    };
    this.setLastName = last => {
      fullName[1] = last;
    };
    this.setFullName = firstAndLast => {
      fullName = firstAndLast.split(" ");
    };
  };