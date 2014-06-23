var Movie = (function(){

  // Constructor
  function Movie() {    
    // Attributes
    var attributes = {};
    var actors = new Array();

    this.set = function(attr, value){
      attributes[attr] = value;
    }

    this.get = function(attr){
      return attributes[attr];
    }

    this.addActor = function(actor){
      actors[actors.length] = actor;
    }

    this.showActors = function(){
      console.log("Actors of " + this.get("title") + ":");
      for (var i in actors){
        console.log(" - " + actors[i].getName());
      }
    }
  }

  // Methods
  Movie.prototype.constructor = Movie;

  Movie.prototype.play = function(){   
    $(this).trigger("playing");

    return this;
  }

  Movie.prototype.stop = function(){
    $(this).trigger("stopped");

    return this;
  }

  return Movie;
})();

/* -------------------- MOVIE OBSERVER -------------------- */

var MovieObserver = function(movie){
  $(movie).on("playing", function(){
    console.log("[MovieObserver] Playing " + this.get("title"));
  });

  $(movie).on("stopped", function(){
    console.log("[MovieObserver] Stopped " + this.get("title"));
  });
}

/* -------------------- DOWNLOADABLE MOVIE -------------------- */

function DownloadableMovie(title){
  this.constructor(title);
}

DownloadableMovie.prototype = new Movie();

DownloadableMovie.prototype.download = function(){
  console.log("Downloading " + this.get("title"));

  return this;
};


/* -------------------- MIXIN -------------------- */

function mixin(dest, source) {
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      dest[i] = source[i];
    }
  }

  return dest;
}

var Social = {
  share: function(friendName){
    console.log("Sharing " + this.get("title") + " with " + friendName);
  },

  like: function(){
    console.log("Liked " + this.get("title"));
  }
};

// Mixin
mixin(Movie.prototype, Social);


/* -------------------- ACTOR -------------------- */

var Actor = function(name){
  var name = name;

  this.getName = function (){
    return name;
  }
}

var titanic = new Movie();
var titanicObserver = new MovieObserver(titanic);
var terminator = new Movie();
var terminatorObserver = new MovieObserver(terminator);

// Downloadable
var thor = new DownloadableMovie();
var thorObserver = new MovieObserver(thor);

// Actors
var leonardo = new Actor("Leonardo DiCaprio");
var kate = new Actor("Kate Winslet");

$(document).ready(function(){
  titanic.set("title", "Titanic");
  terminator.set("title", "Terminator");
  thor.set("title", "Thor");
  titanic.play();
  terminator.stop();

  // Actors
  titanic.addActor(leonardo);
  titanic.addActor(kate);
  titanic.showActors();
});