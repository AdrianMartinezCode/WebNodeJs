var http = require('http'),
	fs = require('fs');




function readTweets(username, responsehead) {
	console.log('Reading tweets... of ' + username);
	var TwitterPackage = require('twitter');
	var secret = require('./secretTwitter.js');
	/*var secret = {
	  
	};*/
	//console.log(secret.consumer_key);
	var Twitter = new TwitterPackage(secret);
	var params = {screen_name: username, count: '30'};

	Twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
		//console.log(tweets);
		if (error) {
			responsehead.end();
			//throw error;
		} else {

			responsehead.writeHeader(200, {"Content-Type": "application/json"});
			responsehead.end(JSON.stringify(tweets));
		}
		//$scope.tweets = tweets;
		//console.log(tweets);
		

		/*var fs = require('fs');
		fs.writeFile('./tweets', JSON.stringify(tweets), function(err) {
			if (err) {
				throw err;
			}
		});*/
	});
}




http.createServer(function(request, response) {
	console.log('Requested!');
	//var v1 = "/tweets";
	var rurl = request.url;
	console.log(request.url);
	// var parttw = 
	var re = new RegExp("^(\/tweets)");
	if (re.test(rurl)) {
		var username = rurl.split("&&")[1];
		readTweets(username,response);


		//if (v1.localCompare(v2)) {
		/*fs.readFile('.' + request.url, function(err,html) {

		})
		response.writeHeader(200, {"Content-Type": "text/html"});
		response.end(JSON.stringify(tweets));*/
		
		console.log('Call on tweets');
		

	} else {
		console.log('Requested page normal!');
		fs.readFile('.' + request.url, function(err,html) {
			if (err) {
				console.log(err);
			} else {
				response.writeHeader(200, {"Content-Type": "text/html"});
			    //response.write();  
			    response.end(html);
			}
		
		});
	}
	
	
    //console.log(request);
}).listen(8000);

//setTimeout(readTweets, 30*1000);

/*http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);*/
