const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

  suite("To British English", function(){

    test("Mangoes are my favorite fruit.", function(done){
      assert.equal(translator.amerToBrit("Mangoes are my favorite fruit."), <span class="highlight">favourite</span> fruit.);
      done();
    })

  });

});
