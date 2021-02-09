function translatePigLatin(str) {
    let regex = /^[^aieou]+/;
    let consonants = str.match(regex);
    return consonants !== null
          ? str
          .concat(consonants)
          .replace(consonants, "")
          .concat("ay")
          : str.concat("way");
  }