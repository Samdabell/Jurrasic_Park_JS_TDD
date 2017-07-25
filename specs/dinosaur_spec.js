var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Triceratops", 2);
  });

  it('should have a type', function(){
    assert.strictEqual(dinosaur.type, "Triceratops");
  });

  it('should have a number of offspring per year', function(){
    assert.strictEqual(dinosaur.offspring, 2);
  });

})