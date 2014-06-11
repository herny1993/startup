var Movie = function() {
  // Attributes
  var attributes = {};

  // Methods
  this.play = function(){
    console.log("Playing");
  }

  this.stop = function(){
    console.log("Stopped");
  }

  this.set = function(attr, value){
    attributes[attr] = value;
  }

  this.get = function(attr){
    return attributes[attr];
  }
}

var titanic = new Movie();
titanic.play();