/*
	Documentation:
	https://developer.twitter.com/en/docs
	https://www.npmjs.com/package/twitter
*/


var angular = require('angular');

/*Twitter.post('statuses/update', {status: 'I Love Tech Knights!'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
*/



var twitterbot = angular.module('twitterbot', []);


twitterbot.controller('LastTweets', function LastTweets($scope, $http) {

	/*$scope.add = function(){
	    $http.get('http://localhost:8000/tweets').then(function(response){
	        queries = response.queries;
	        $scope.tweets = queries.request.totalResults;

		 });
	}*/

	$scope.seekUser = function() {
		var username = $scope.userName;
		console.log(username);
		$scope.url = 'http://localhost:8000/tweets&&' + username;
		//$scope.add = function(){
		console.log("Hola2");
	  	$http.get($scope.url).then(function(response) {
	  		console.log("Hola");
	        $scope.tweets = response.data;
	        console.log(response);
	        console.log($scope.tweets);
	        //$scope.messages.push($scope.newMessage);
	  	}).catch(function onError(error) {
	  		console.log(error);
	  	});
	}


	
	//};


	//console.log('Dentro del controlador');
	
	/*Twitter.post('statuses/update', {status: 'I Love Tech Knights!'},  function(error, tweet, response){
		if(error){
			console.log(error);
		} 
		console.log(tweet);  // Tweet body.
		console.log(response);  // Raw response object.
	});*/

	//var self = this;
	

	//$scope.tweets = [
	/*$scope.tweets = [
	    {
	      name: 'Nexus S',
	      snippet: 'Fast just got faster with Nexus S.'
	    }, {
	      name: 'Motorola XOOM™ with Wi-Fi',
	      snippet: 'The Next, Next Generation tablet.'
	    }, {
	      name: 'MOTOROLA XOOM™',
	      snippet: 'The Next, Next Generation tablet.'
	    }
  	];*/
});


/*client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});*/