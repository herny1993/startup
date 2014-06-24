define(['multimedia'], function(multimedia) {
	var titanic = new multimedia.Movie();
	var terminator = new multimedia.Movie();

	titanic.set("title", "Titanic");
  	terminator.set("title", "Terminator");
 
	titanic.play();
});