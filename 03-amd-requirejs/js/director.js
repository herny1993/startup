define(['multimedia'], function(multimedia) {
	// Constructor
  	function Director(name) {
	    // Attributes
	    var name = name;
	    var quotes = new Array();

	    this.addQuote = function(quote){
	      quotes[quotes.length] = quote;
	    }

	    this.speak = function(){
	      console.log("Quotes of " + name + ":");
	      for (var q in quotes){
	        console.log(" - \"" + quotes[q] + "\"");
	      }
	    }
	}

	// Methods
	Director.prototype.constructor = Director;

	return {Director : Director};

});