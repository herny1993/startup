var Movie = (function(){
  // Attributes
  var attributes = {};

  // Constructor
  function Movie() {}

  // Methods
  Movie.prototype.play = function(){   
    $(this).trigger("playing");
  }

  Movie.prototype.stop = function(){
    $(this).trigger("stopped");
  }

  Movie.prototype.set = function(attr, value){
    attributes[attr] = value;
  }

  Movie.prototype.get = function(attr){
    return attributes[attr];
  }

  return Movie;
})();

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