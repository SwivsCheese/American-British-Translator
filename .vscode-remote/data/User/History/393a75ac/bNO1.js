const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');
const mergedA = {...americanOnly, ...americanToBritishSpelling, ...americanToBritishTitles};
const mergedB = {...britishOnly, ...americanToBritishSpelling, ...americanToBritishTitles};

class Translator{

  amerToBrit(text){
    let arr = text.split(" ");
    arr.forEach((a, b) => {
      if(a in mergedA){
        arr[b].splice(b, 1)
      };
    });
    console.log(arr);
    
  };

  britToAmer(text){
    let arr = text.split(" ");
    arr.forEach((a) => {
      console.log(a);
    });

  };
};

module.exports = Translator;