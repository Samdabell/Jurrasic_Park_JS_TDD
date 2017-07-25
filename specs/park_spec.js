var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('Park', function(){

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;
  var dinosaur6;
  var dinosaurs;

  beforeEach(function(){
    park = new Park();
    
    dinosaur1 = new Dinosaur("Triceratops", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 1);
    dinosaur3 = new Dinosaur("Triceratops", 4);
    dinosaur4 = new Dinosaur("Tyrannosaurus", 5);
    dinosaur5 = new Dinosaur("Diplodocus", 3);
    dinosaur6 = new Dinosaur("Tyrannosaurus", 2);

    dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5, dinosaur6];

  })

  it('should start empty', function(){
    assert.strictEqual(park.numDinos(), 0);
  });

  it('should be able to add dinosaur', function(){
    park.add(dinosaur1);
    assert.strictEqual(park.numDinos(), 1);
  });

  it('should be able to remove dinosaurs by type', function(){
    park.enclosure = dinosaurs;
    park.remove("Tyrannosaurus");
    assert.strictEqual(park.numDinos(), 4);
  });

  it('should get all dinosaurs with offspring count > 2', function(){
    park.enclosure = dinosaurs;
    assert.strictEqual(park.offspringCount(), 3);
  });

  it('should calculate the number of dinosaurs after year 1, starting with 1', function(){
    park.add(dinosaur4);
    assert.strictEqual(park.annualPop(1), 6);
  });
  
  it('should calculate the number of dinosaurs after year 2, starting with 1', function(){
    park.add(dinosaur4);
    assert.strictEqual(park.annualPop(2), 11);
  });

  it('should calculate the number of dinosaurs after year 2, starting with 2', function(){
    park.add(dinosaur3);
    park.add(dinosaur5);
    assert.strictEqual(park.annualPop(2), 16);
  });

})