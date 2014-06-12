var Movie = function() {
  // Attributes
  var attributes = {};

  // Methods
  this.play = function(){   
    $(this).trigger("playing");
  }

  this.stop = function(){
    $(this).trigger("stopped");
  }

  this.set = function(attr, value){
    attributes[attr] = value;
  }

  this.get = function(attr){
    return attributes[attr];
  }
}

var MovieObserver = function(movie){
  $(movie).on("playing", function(){
    console.log("Playing " + this.get("title") + " from MovieObserver");
  });

  $(movie).on("stopped", function(){
    console.log("Stopped " + this.get("title") + " from MovieObserver");
  });
}

var titanic = new Movie();
var titanicObserver = new MovieObserver(titanic);

$(document).ready(function(){
  titanic.set("title", "Titanic");
  titanic.play();
});