// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, false);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {    
  // All HTML5 Rocks properties support CORS.
  var url = 'http://lanacion.cloudapi.junar.com/datastreams/invoke/EVOLU-DEL-PRECI-PARA-LA?auth_key=' +
      "80adc6b7da15bc99fe5eb81eb39a775add78d8a7";

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

$(document).ready(function(){
    
    // Put cursor in textbox
    $("#sfy-artist").focus();
    
    var artist = $_GET["artist"] || "Rolling Stones";
    console.log("Buscando: " + artist);
    
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: 'artist:' + artist,
            type: 'album',
            market: "US"
        },
        //async: false,
        //jsonpCallback: 'jsonCallback',
        //contentType: "application/json",
        //dataType: 'jsonp',
        success: function (response) {
            //alert("Spotify OK");
            //console.log(response);
            
            // HEADER
            $("#sfy-title").text("Artista: " + artist);
            $("#sfy-desc").text("Mostrando " + (response.albums.offset + 1) + " - " + response.albums.items.length + 
                                " de " + response.albums.total + " encontrados.");
            
            // ALBUMS
            var albums = response.albums.items;
            var dom_albums = $("#sfy-albums");
            var rowCount = 3; var rowsSize = 4;
            dom_albums.append('<div class="row">');
            $.each(albums, function(i, item) {
                // Add Album
                dom_albums.append(
                    '<div class="col-md-' + rowsSize + ' sfy-album" id="sfy-album-' + i + '">' + 
                    '   <div class="thumbnail">' +
                    '   <img alt="" class="img-responsive">' +
                    '   <div class="caption">' +
                    '   <h3>' + item.name + '</h3>' +
                    '   <p class="sfy-album-desc"></p>' +
                    '   <p>' +
                    '       <a href="#" class="btn btn-primary">Escuhar Ya!</a>' +
                    '       <a href="#" class="btn btn-default">Mas Info</a>' +
                    '   </p>' +
                    '</div>'
                );
                
                console.log("Cargando...");
                if (i % rowCount == rowCount - 1){
                    console.log("Agregando fila");
                    dom_albums.append('</div>');
                    dom_albums.append('<div class="row">');                    
                }
                    
                // Load Async Image
                var sfy_album = $("#sfy-album-" + i);
                sfy_album.fadeOut(0);
                sfy_album.find(".thumbnail img").attr("src", item.images[0].url).load(function(){
                    console.log("Cargado...");
                    sfy_album.fadeIn(2000);
                });
            });
            dom_albums.append('</div>');
        }
    });
    
    // Click Event
    $("#sfy-search").click(function(e){
        window.location.href = window.location.pathname + "?artist=" + $("#sfy-artist").val();
        e.preventDefault();
    });
    
});