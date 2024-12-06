const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

  suite("To British English", function(){

    test("Mangoes are my favorite fruit.", function(done){
      assert.equal(translator.amerToBrit("Mangoes are my favorite fruit."),
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });

    test("I ate yogurt for breakfast.", function(done){
      assert.equal(translator.amerToBrit("I ate yogurt for breakfast."), 
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
      done();
    });

    test("We had a party at my friend's condo.", function(done){
      assert.equal(translator.amerToBrit("We had a party at my friend's condo."), 
      "We had a party at my friend's condo."
      );
      done();
    });

    test("Can you toss this in the trashcan for me?", function(done){
      assert.equal(translator.amerToBrit("Can you toss this in the trashcan for me?"), 
      'Can you toss this in the <span class="highlight">bin</span> for me?'
      );
      done();
    });

    test("The parking lot was full.", function(done){
      assert.equal(translator.amerToBrit("The parking lot was full."), 
      'The parking lot was full.'
      );
      done();
    });

    test("Like a high tech Rube Goldberg machine.", function(done){
      assert.equal(translator.amerToBrit("Like a high tech Rube Goldberg machine."), 
      'Like a high tech Rube Goldberg machine.'
      );
      done();
    });

  });
// <span class="highlight"></span>

});