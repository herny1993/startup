define(['multimedia', 'director'], function(multimedia, director) {
	var titanic = new multimedia.Movie();
	var terminator = new multimedia.Movie();

	titanic.set("title", "Titanic");
  	terminator.set("title", "Terminator");
 
	titanic.play();

	var james = new director.Director("James Cameron");
	james.addQuote("People call me a perfectionist, but I'm not. I'm a rightist. I do something until it's right, and then I move on to the next thing.");
	james.addQuote("If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.");
	james.speak();

});