	var page = require('webpage').create();


	console.log('Starting Test' );
	page.consoleLogMessage = function(  message ){
		console.log( "Console: " + message );
	}


	page.open('http://www.google.com', function(status) {
	  if (status !== 'success') {
	    console.log('Unable to access network');
	  } else {
	    var ua = page.evaluate(function() {
	      return document.getElementById('myagent').textContent;
	    });
	    console.log(ua);
	  }
	  phantom.exit();
	});

//setTimeout(next_page,100);

