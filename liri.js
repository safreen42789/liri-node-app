//require("dotenv").config();

var request = require("request");
//var spotify = new Spotify(keys.spotify);
//var client = new Twitter(keys.twitter);

var userInput = process.argv[2];

var Title = process.argv[3];



// * `my-tweets`
// GET https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=985568643516911619&count=20


// request("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=985568643516911619&count=20", function(error, response, body) {

//   // If the request was successful...
//   if (!error && response.statusCode === 200) {

//     // Then log the body from the site!
//     console.log(body);
//   }
// });

// * `spotify-this-song`

// * `movie-this`
if (userInput = "movie-this"){

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
    else if (userInput = "movie-this", Title = " "){

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
