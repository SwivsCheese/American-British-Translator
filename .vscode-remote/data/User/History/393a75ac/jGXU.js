const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

// This was stolen from google's AI overview
// I looked up "invert keys and values javascript"

function invertKeyValue(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

// End of stolen snippet of code

const mergedA = {...americanOnly, ...americanToBritishSpelling, ...americanToBritishTitles};
const mergedB = {...britishOnly, ...invertKeyValue(americanToBritishSpelling), ...invertKeyValue(americanToBritishTitles)};


class Translator{

  amerToBrit(text){
    let arr = text.split(" ");
    arr.forEach((a, b) => {
      if(a in mergedA){
        // eventually fix mr., mrs., mx. titles
        arr.splice(b, 1, `<span class="highlight">${mergedA[a]}</span>`);
      };
    });
    let returner = arr.join(" ");
    console.log(returner);
    return returner;
    
  };

  britToAmer(text){
    console.log(mergedB);
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