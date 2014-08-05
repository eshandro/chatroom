$(function(){
	// connect the socket.io server
	var socket = io.connect()
	
	//define socket events
	socket.on('connect', function() {
		socket.on('message', function(data) {
			$('#room').append(data + '<br>');
			// speak(data);
		})
	})
	// attach events
	$('#message-input').on('keyup', function(event) {
		if(event.which === 13) {
			event.preventDefault();
			var message = $('#message-input').val();
			console.log(message)
			socket.emit('message', message);
		}

	})
});
