'use strict';

const { text } = require('body-parser');
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, local} = req.body;



      if(local === 'american-to-british'){
        return translator.amerToBrit(text)

      }

      else{
        return translator.britToAmer(text)

      }

      res.json({text: 'aye wassup tho'})
      
    });
};
