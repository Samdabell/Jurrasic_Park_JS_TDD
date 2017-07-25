var Park = function(){
  this.enclosure = [];
}

Park.prototype = {
  numDinos: function(){
    return this.enclosure.length;
  },

  add: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  remove: function(type){
    var filteredEnclosure = [];
    for (var dinosaur of this.enclosure){
      if(dinosaur.type != type){
        filteredEnclosure.push(dinosaur);
      }
    }
    this.enclosure = filteredEnclosure;
  },

  offspringCount: function(){
    counter = 0;
    for (var dinosaur of this.enclosure){
      if (dinosaur.offspring > 2){
        counter++;
      }
    }
    return counter;
  },

  annualPop: function(years){
    counter = this.numDinos();
    for (var i = 0; i < years; i++){
      for (var dinosaur of this.enclosure){
        counter += dinosaur.offspring;
      }
    }
    return counter;
  }

};

module.exports = Park;