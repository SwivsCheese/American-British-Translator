'use strict';
const { text } = require('body-parser');
const Translator = require('../components/translator.js');
const americanToBritishTitles = require("../components/american-to-british-titles.js");
const reg = americanToBritishTitles;
const reversed = invertKeyValue(americanToBritishTitles);
//...invertKeyValue(americanToBritishTitles)
const regex = /\d{1,2}:\d{2}/g; 
const regex2 = /\d{1,2}.\d{2}/g;
const regex3 = /\b(mrs.|mr.|ms.|mx.|dr.|prof.)\s*/gi;
const regex4 = /\b(mrs|mr|ms|mx|dr|prof)\s/gi;
const regex5 = /<span class="highlight">/gi;

function invertKeyValue(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate', text)
    .post((req, res) => {
      const {text, locale} = req.body;
      let tame;
      let tOrF = false;

      if(!locale || text == undefined){
        return res.send({ error: "Required field(s) missing" });
      }

      if(!text){
        return res.send({ error: "No text to translate" });
      }

      if(locale === 'american-to-british'){
        tame = translator.amerToBrit(text);
        let theyer = tame.match(regex);
        let youre = tame.match(regex3);
        let good = tame.match(regex5);


        if(youre){
          youre.forEach((a, b) => {
            let allow = a.toLowerCase();
            let newYour = reg[allow];
            console.log(allow, newYour);
            //tame = tame.replace(a, newYour.replace(/^./, char => char.toUpperCase()));
            tOrF = true;
          });
        }

        
        if(theyer){
          theyer.forEach((a, b) => {
            var newTime = a.replace(":", ".");
            tame = tame.replace(a, `<span class="highlight">${newTime}</span>`);
            tOrF = true;
          });
        }

        if(good || tOrF){
          return res.send({ text, translation: tame });
        }

        else{
          return res.send({text, translation: "Everything looks good to me!"})
        }

        
      }

      else if(locale === 'british-to-american'){
        tame = translator.britToAmer(text);
        let theyer = tame.match(regex2);
        let youre = tame.match(regex4);
        let good = tame.match(regex5);


        if(youre){
          youre.forEach((a, b) => {
            var newYork = a.replace(" ", ".");
            tame = tame.replace(a, newYork.toLowerCase().replace(/^./, char => char.toUpperCase()));
            tOrF = true;
          });
        }  

        
        if(theyer){
          theyer.forEach((a, b) => {
            var newTimed = a.replace(".", ":");
            tame = tame.replace(a, `<span class="highlight">${newTimed}</span>`);
            tOrF = true;
          });
        }

        if(good || tOrF){
          return res.send({ text, translation: tame });
        }

        else{
          return res.send({text, translation: "Everything looks good to me!"})
        }
      }

      else{
        return res.send({ error: "Invalid value for locale field" });
      }

    });
};

/*

this worked, but I guess it doesn't like it idk.

if(youre){
          youre.forEach((a, b) => {
            var newYour = a.replace(".", "");
            tame = tame.replace(a, newYour.toLowerCase().replace(/^./, char => char.toUpperCase()));
            tOrF = true;
          });
        }

if(youre){
          youre.forEach((a, b) => {
            var newYork = a.replace(" ", ".");
            tame = tame.replace(a, newYork.toLowerCase().replace(/^./, char => char.toUpperCase()));
            tOrF = true;
          });
        }


*/
