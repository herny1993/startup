$(document).ready(function(){
  // Fade In
  $(".content").fadeOut(0);
  $(".content").fadeIn();

  // Put cursor in textbox
  $(".alias").focus();

  // Click Event
  $("#button").click(function(e){
    // Send Request
    var name = $(".alias").val();

    $.ajax({
      type: "POST",
      url: "http://bootcamp.aws.af.cm/welcome/" + name,
      success: function(response){
        $("#greeting-response").css("color", "black");
        resp = response.response;
        resp = resp.replace(name, "<b>" + name + "</b>");
        $("#greeting-response").html(resp);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        $("#greeting-response").css("color", "red");
        $("#greeting-response").html(xhr.status + " (" + thrownError + ")");
      }
    });
  });

  $("#button-tweet").click(function(e){
    // Send Request with JSONP
    (function($) {
      var url = 'http://tweetproxy.ap01.aws.af.cm/search?q=html5&callback=?';
 
      $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
          console.log(json);
          var $nav_tweets = $('#nav-tweets');
          $.each(json.statuses, function(i, tweet){
            $nav_tweets.append(
              '<div class="tweet">' +
              '  <header>' +
              '  <img src="' + tweet.user.profile_image_url + '" alt="profile"' + 
              '    <h4> ' + tweet.user.screen_name + '</h4>' +
              '  </header>' +
              '  <p> ' + tweet.text + '</p>' +
              '  <footer><p>Created at ' + tweet.created_at + '</p></footer>' +
              '</div>'
            );
          });
        },
        error: function(e) {
           console.log(e.message);
        }
      });
    })(jQuery);
  });

});
