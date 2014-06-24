define(function(){

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
    //$(this).trigger("playing");
    console.log("Playing " + this.get("title"))

    return this;
  }

  Movie.prototype.stop = function(){
    //$(this).trigger("stopped");
    console.log("Stopped " + this.get("title"));

    return this;
  }

  return {Movie : Movie};

});