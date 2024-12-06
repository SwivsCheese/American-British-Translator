'use strict';

const { text } = require('body-parser');
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, local} = req.body;
      let you;



      if(local === 'american-to-british'){
        you = translator.amerToBrit(text);

      }

      else{
        you = translator.britToAmer(text)

      }

      res.json({text: you})
      
    });
};
