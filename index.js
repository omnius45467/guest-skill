var alexa = require('alexa-app');
var app = new alexa.app();

/**
 * LaunchRequest.
 */
app.launch(function(request,response) {
	response.say('Cool, who has come over?');
	// response.card("Hey there fancy pants!","This is an example card");
	// var number = request.slot('numbers');
	// response.say('You asked for the number '+number);
	response.shouldEndSession(false);
	response.send();
});


/**
 * IntentRequest.
 */
app.intent('GuestIntent',
  {
    'slots':{'Guest':'LIST_OF_GUESTS'},
    'utterances':[
		'{Guest} {Guest} and {Guest}',
		'{Guest}',
		'{Guest} and {Guest}',
		'{Guest} and his family',
		'{Guest} and her family',
		'{Guest} and his boyfriend',
		'{Guest} and her boyfriend',
		'{Guest} and his girlfriend',
		'{Guest} and her girlfriend',
		'{Guest} and his wife',
		'{Guest} and her wife',
		'{Guest} and his husband',
		'{Guest} and her husband',
		'{Guest} and his friends',
		'{Guest} and her friends',
		'{Guest} and friends'

	]
  },
  function(request,response) {
    var guest = request.slot('Guest');
	  if(guest == 1){
		  response.say('Hello '+guest+' I am happy jeremy has friends, if you would like to listen to music just ask me!');
		  response.shouldEndSession(true);
		  response.send();
	  }else{
		  response.say('Hello '+guest+' I am happy jeremy has friends, if you would like to listen to music just ask me!');
		  response.shouldEndSession(true);
		  response.send();
	  }

  }
);


/**
 * IntentRequest w/ asynchronous response.
 */
app.intent('EndIntent',
	{
    	'utterances':[ 
    		'end', 'cancel', 'stop'
    	]
  	},
	function(request,response) {
		setTimeout(function() {		// simulate an async request

	        // This is async and will run after a brief delay
	        response.say('alright');
	    
	        // Must call send to end the original request
	        response.send();
		
		}, 250);

	    // Return false immediately so alexa-app doesn't send the response
	    return false;
	}
);


/**
 * Error handler for any thrown errors.
 */
app.error = function(exception, request, response) {
    response.say('Sorry, something bad happened');
};

// Connect to lambda
exports.handler = app.lambda();
