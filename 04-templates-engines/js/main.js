$(document).ready(function(){
	
	// Compilation
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);

	// Execution
	var context = {title: "Template Engines", footer: "Copyright 2014. All rights reserved "}
	var html = template(context);

	var target = $("#entry");
	target.html(html);

});