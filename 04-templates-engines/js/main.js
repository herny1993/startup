$(document).ready(function(){

	// Compilation
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);

	// Execution
	var context = {title: "Template Engines", footer: "Copyright 2014. All rights reserved "}
	var html = template(context);

	var target = $("#entry");
	target.html(html);

	// Underscore
	var numbers = [10, 5, 100, 2, 1000];
	console.log("Minimum: " + _.min(numbers));

	// Dust
	var compiled = dust.compile("<div class='intro'> Hello {name}! </div>", "intro");
	console.log(compiled);
	//dust.render(compiled(), {name: "Fred"}, function(err, out) {
  	//	console.log("Salida: " + out);
  	//	console.log("Error: " + err);
	//});
});