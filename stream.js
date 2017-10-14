var fs = require('fs'),
    request = require('request'),
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 2086;

// chat template

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){


// refresh how many are watching every 5000 ms
	setInterval(function(){
	    socket.emit('count', Object.keys(io.sockets.connected).length); 

	}, 5000);
	

// if a chat is received, push it to everyone		
	
	  socket.on('chat message', function(msg){
	  	//console.log(msg);
	  	var username;
	  	if(msg.username === ""){
	  		username = "Guest";
	  	} else {
	  		username = msg.username;
	  	}
	    io.emit('chat message',  {'msg': "<b>"+username+":</b> "+msg.msg,'count': Object.keys(io.sockets.connected).length });
	  });
});

//start app
   
  http.listen(port, function(){
		 console.log('listening on *:' + port);
});
