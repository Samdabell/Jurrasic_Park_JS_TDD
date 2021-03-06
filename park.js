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

  offspringMore2: function(){
    var dinosaurs = []
    for (var dinosaur of this.enclosure){
      if (dinosaur.offspring > 2){
        dinosaurs.push(dinosaur);
      }
    }
    return dinosaurs;
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