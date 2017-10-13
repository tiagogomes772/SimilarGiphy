//var fetch = require('node-fetch');

var giphy_api_key ="7rWj7aVXKtuXRQAnBWppHa9SFp5DjBPX";


url = "http://api.giphy.com/v1/gifs/search?q=";


function searchForGiphy(query){
  var myHeaders = new Headers();
  myHeaders.append("api_key", giphy_api_key);
  var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default'};
  var myRequest = new Request(url + encodeURIComponent(query) + "&api_key=" + giphy_api_key);


  return fetch(myRequest)
  .then(function(response){
    return response.json();
  }).then(function(data){
    AddNewImage(data.data);
  })
  .catch(function(err){
    console.log("Error Fetching:" + err);
  });
}


var button = document.querySelector("button");
button.addEventListener("click", function(event){
  var searchQuery = document.getElementById("search").value;
  searchForGiphy(searchQuery);
  event.preventDefault();
});




function AddNewImage(data){
  while (document.getElementById("gifs").hasChildNodes()) {
    document.getElementById("gifs").removeChild(document.getElementById("gifs").lastChild);
  }
  if(data.length == 0){
    var t = document.createTextNode("Hello World");
    document.getElementById("gifs").appendChild(elem);
  }
  for(var i=0; i < data.length; i++){
    var url_image = data[i].images.original.url
    var elem = document.createElement("img");
    elem.setAttribute("src", url_image);
    var bla = document.getElementById("gifs").appendChild(elem);
    bla.style.height = '100px';
    bla.style.width = '200px';
  }

  
}


