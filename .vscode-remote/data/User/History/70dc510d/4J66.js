const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator{

  amerToBrit(text){
    text.forEach((elem) => {
      console.log(elem);
    });

  }

  britToAmer(text){

  }


};

module.exports = Translator;