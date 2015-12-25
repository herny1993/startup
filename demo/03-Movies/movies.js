(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Movie = require('movie');
var Director = require('director');

// Thor Movie for testing
var thor = new Movie();
thor.set("title", "Thor");
console.log(thor.get("title"));

var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
thor.set('director', ridleyScott);
var quote = thor.get('director').speak(); //output: Ridley Scott says: 'Cast is...'

console.log(quote);

// Test
// node index.js

// Browserify
// npm install -g browserify
// browserify index.js > movies.js
},{"director":2,"movie":3}],2:[function(require,module,exports){
// Require
//var Movie = require('movie');

// -----------------------------------

var Director = (function(){

  // Constructor
  function Director(name) {    
    // Attributes
    var attributes = {};

    this.set = function(attr, value){
      attributes[attr] = value;
    }

    this.get = function(attr){
      return attributes[attr];
    }
    
    this.speak = function(){
      var i = Math.floor(Math.random() * attributes.quotes.length);
      return this.get('name') + " says: " + attributes.quotes[i];
    }
    
    this.set('name', name);
  }

  // Methods
  Director.prototype.constructor = Director;

  return Director;
})();

// Exports
module.exports = Director;
},{}],3:[function(require,module,exports){
// Require
//   (Nothing yet)
// -----------------------------------


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
    //$(this).trigger("playing");
    console.log("Playing");
    
    return this;
  }

  Movie.prototype.stop = function(){
    console.log("Stopped");
    //$(this).trigger("stopped");

    return this;
  }

  return Movie;
})();

// Exports
module.exports = Movie;
},{}]},{},[1]);
