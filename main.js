$(document).ready(function(){
	console.log("ready!");

	// var query = [];

	function searchWord(){
		var query = $("input-word").val();
		$.getJSON(
	 //      // "http://pokeapi.co/api/v2/pokemon/1/
	 //      // "https://api.tronalddump.io/search/quote?query=query",
	 //      // "https://od-api-demo.oxforddictionaries.com:443/api/v1/domains/{source_language}"

	      "http://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=39a1f430908be598eec7ebc09d013393",
	      
	      function(response) {
	      console.log(response);
	       	$("#results").show();
	       	//it will be....
	       	$("#description").html(response.weather[0].description)
	       	//with ______ degrees
	       	
	      // });  //"response" is specific term
		});

// ("weather" + response.data)
	};

	$("#search").on("click", function(){
		searchWord();
	});
});


