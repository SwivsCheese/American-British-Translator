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

    test("To play hooky means to skip class or work.", function(done){
      assert.equal(translator.amerToBrit("To play hooky means to skip class or work."), 
      'To play hooky means to skip class or work.'
      );
      done();
    });

    test("No Mr. Bond, I expect you to die.", function(done){
      assert.equal(translator.amerToBrit("No Mr. Bond, I expect you to die."), 
      'No Mr. Bond, I expect you to die.'
      );
      done();
    });

    test("Dr. Grosh will see you now.", function(done){
      assert.equal(translator.amerToBrit("Dr. Grosh will see you now."), 
      'Dr. Grosh will see you now.'
      );
      done();
    });

    test("Lunch is at 12:15 today.", function(done){
      assert.equal(translator.amerToBrit("Lunch is at 12:15 today."), 
      'Lunch is at 12:15 today.'
      );
      done();
    });
  });

  suite("To American English", function(){
    
    test("We watched the footie match for a while.", function(done){
      assert.equal(translator.britToAmer("We watched the footie match for a while."),
      'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });

    test("Paracetamol takes up to an hour to work.", function(done){
      assert.equal(translator.britToAmer("Paracetamol takes up to an hour to work."),
      'Paracetamol takes up to an hour to work.'
      );
      done();
    });

    test("First, caramelise the onions.", function(done){
      assert.equal(translator.britToAmer("First, caramelise the onions."),
      'First, caramelise the onions.'
      );
      done();
    });

    test("I spent the bank holiday at the funfair.", function(done){
      assert.equal(translator.britToAmer("I spent the bank holiday at the funfair."),
      'I spent the bank holiday at the funfair.'
      );
      done();
    });

    test("I had a bicky then went to the chippy.", function(done){
      assert.equal(translator.britToAmer("I had a bicky then went to the chippy."),
      'I had a bicky then went to the chippy.'
      );
      done();
    });

    test("I've just got bits and bobs in my bum bag.", function(done){
      assert.equal(translator.britToAmer("I've just got bits and bobs in my bum bag."),
      "I've just got bits and bobs in my bum bag." // fix this
      );
      done();
    });

    test("The car boot sale at Boxted Airfield was called off.", function(done){
      assert.equal(translator.britToAmer("The car boot sale at Boxted Airfield was called off."),
      'The car boot sale at Boxted Airfield was called off.'
      );
      done();
    });
  });
});
// <span class="highlight"></span>
