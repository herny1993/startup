  
  // Model: Movie
  var Movie = Backbone.Model.extend({});

  // Collection: MovieList
  var MovieList = Backbone.Collection.extend({
    model: Movie
  });

  // View: MovieList
  // Update Model from Input (Add New Movies)
  var AddMovieView = Backbone.View.extend({

    el: '#movie-add',

    events: {
      "change input[name='title']": 'onChangeTitle',
      "change input[name='year']": 'onChangeYear',    
      "change input[name='director']": 'onChangeDirector',
      "click #add" : 'addMovie'
    },

    addMovie: function() {
      console.log("Add Movie");    
      this.collection.add(this.model);
      this.reset();
    },

    initialize: function() {
      _.bindAll(this, 'render', 'onChangeTitle', 'onChangeYear', 'onChangeDirector');

      this.reset();
    },

    reset: function() {
      this.model = new Movie();
      this.render();
    },

    onChangeTitle: function() {
      this.model.set("title", $("input[name='title']", this.el).val());
    },

    onChangeYear: function() {
      this.model.set("year", $("input[name='year']", this.el).val());
    },

    onChangeDirector: function() {
      this.model.set("director", $("input[name='director']", this.el).val());
    },

    render: function() {
      $("input[name='title']", this.el).val(this.model.get('title'));
      $("input[name='year']", this.el).val(this.model.get('year'));
      $("input[name='director']", this.el).val(this.model.get('director'));
    }

  });

  var MovieListView = Backbone.View.extend({

    el: '#movie-list',

    initialize: function() {
      this.listenTo(this.collection, 'add', this.render);
      this.render();
    },

    render: function() {
      // Length
      $("#length", this.el).html("Length: " + this.collection.length);

      var list = $("#list", this.el);

      list.html("<ul>");
      this.collection.each(function(movie) {
        list.append("<li>" + movie.get("title") + " (" + movie.get("year") + ", directed by " + movie.get("director") + ")</li>");
      });
      list.append("</ul>");
    }

  });


  var movieTitanic = new Movie();
  var movieTerminator = new Movie();

  var myMovieList = new MovieList();
  
  var addMovieView;
  var movieListView;


$(document).ready(function(){

  movieTitanic.set("title", "Titanic");
  movieTitanic.set("year", "1997");
  movieTitanic.set("director", "James Cameron");
  movieTerminator.set({title: 'Terminator'});

  myMovieList.add(movieTerminator);
  myMovieList.add(movieTitanic);

  myMovieList.remove(movieTerminator);

  addMovieView = new AddMovieView({
    collection: myMovieList
  });

  movieListView = new MovieListView({
    collection: myMovieList
  });

});