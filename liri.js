require("dotenv").config();

//ar request = require("request");
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

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

    // var = "https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=985568643516911619&count=20";
    //console.log(queryUrl);

//GET "https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=985568643516911619&count=20";


//request("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=985568643516911619&count=20", function(error, response, body) {

// If the request was successful...
 //if (!error && response.statusCode === 200) {

     // Then log the body from the site!
//onsole.log(body);
// }
 //});
//}
// * `spotify-this-song`

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
