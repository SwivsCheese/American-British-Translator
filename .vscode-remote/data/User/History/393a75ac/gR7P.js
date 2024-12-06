const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

// This was stolen from google's AI overview
// 1. I looked up "invert keys and values javascript"
// 2. I looked up "find times in string javascript"

// 1.
function invertKeyValue(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
} 

// 2
const regex = /\d{1,2}:\d{2}/g; 

// End of stolen snippets of code

const mergedA = {...americanOnly, ...americanToBritishSpelling, ...americanToBritishTitles};
const mergedB = {...britishOnly, ...invertKeyValue(americanToBritishSpelling), ...invertKeyValue(americanToBritishTitles)};


class Translator{

  amerToBrit(text){

    if(!text){
      return;
      // in the tests, error should be the returned value
    };

    let arr = text.split(" ");
    arr.forEach((a, b) => {
      // eventually fix: 
      // mr., mrs., mx. titles
      // times (like 10:30/10.30)
      // 


      if(a in mergedA){
        arr.splice(b, 1, `<span class="highlight">${mergedA[a]}</span>`);
      };
    });
    let returner = arr.join(" ");
    console.log(returner);
    return returner;
    
  };

  britToAmer(text){
    
    if(!text){
      return;
      // in the tests, error should be the returned value
    };

    let arr = text.split(" ");
    arr.forEach((a, b) => {
      if(a in mergedB){
        // eventually fix mr., mrs., mx. titles
        arr.splice(b, 1, `<span class="highlight">${mergedB[a]}</span>`);
      };
    });
    let returner = arr.join(" ");
    console.log(returner);
    return returner;
  };
};

module.exports = Translator;