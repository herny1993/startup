var Movie = require('movie');
var Director = require('director');

var _ = require('underscore');
var Backbone = require('backbone');

// Thor Movie for testing
var thor = new Movie();
thor.set("title", "Thor");
console.log(thor.get("title"));

var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
thor.set('director', ridleyScott);
var quote = thor.get('director').speak(); //output: Ridley Scott says: 'Cast is...'

console.log(quote);

// - Create folder node_modules
// - Execute npm init to create package.json file

// Test
// node index.js

// Browserify
// npm install -g browserify
// browserify index.js > movies.js

// Test in browser
/*
<html>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
*/

var EventManager = {};

_.extend(EventManager, Backbone.Events);

EventManager.on("alert", function(msg) {
  console.log("Triggered '" + msg + "'");
});

EventManager.trigger("alert", "an event");