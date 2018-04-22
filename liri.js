require("dotenv").config();

var userInput = process.argv[2];
var Title = process.argv[3];
// * `my-tweets`
if (userInput === "my-tweets"){
    var Twitter = require("twitter");
    //var request = require("request");
    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      });
      var params = {user_id: '985568643516911619', count: "20"};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
         if (!error) {
          console.log(tweets);
        }
      });
}
// * `movie-this`
else if (userInput === "movie-this"){
        var request = require("request");
        var movieName = process.argv[3];
        // Then run a request to the OMDB API with the movie specified
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);
        // Then create a request to the queryUrl
        // ...
        request("http://www.omdbapi.com/?t=" + movieName+ "&y=&plot=short&apikey=trilogy", function(error, response, body) {
        // If the request was successful...
        if (!error && response.statusCode === 200) {

            // Then log the body from the site!
            console.log(body);
        }
        });
}
//if no movie is inputed make a request for Mr. Nobody info--work in progress
else if (userInput === "movie-this", Title === " "){

        var queryUrl = "http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&apikey=trilogy";
        console.log(queryUrl);

        // Then create a request to the queryUrl
        // ...
        request("http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&apikey=trilogy", function(error, response, body) {

        // If the request was successful...
        if (!error && response.statusCode === 200) {

            // Then log the body from the site!
            console.log(body);
        }
        });
}
// * `do-what-it-says`
    else if (userInput === "do-what-it-says"){
        var fs = require("fs");

        fs.readFile("random.txt", "utf8", function(error, data){
            if(error){
                return console.log(error);
            }
            console.log(data);

            var dataArr = data.split(",");
            console.log(dataArr);
        });
    }
    else if (userInput === "spotify-this-song"){
        var spotify = require("node-spotify-api");
        var songName = process.argv[3];

            var spotify = new spotify({
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
            });

        spotify.search({ type: 'track',  query: songName, limit: 1 }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            //console.log(data);
           console.log(data.tracks);
            //     var songData = data.tracks.items[0];
            //     var songResults = console.log(songData.artists[0].name)
            //          console.log(songData.name)
            //          console.log(songData.album.name)
            //          console.log(songData.preview_url)
            //     console.log(songResults);
            // };

        
            });
        };