$(function(){
	// connect the socket.io server
	var socket = io.connect()
	
	//define socket events
	socket.on('connect', function() {
		$('#users').append('User connected' + '<br>');
		socket.on('message', function(data) {
			$('#room').append(data + '<br>');
			// speak(data);
		})
	})
	socket.on('disconnect', function() {
		$('#users').append('User disconnected' + '<br>')
	})

	// attach events
	$('#message-input').on('keyup', function(event) {
		if(event.which === 13) {
			event.preventDefault();
			var message = $('#message-input').val();
			socket.emit('message', message);
			$(this).val('');
		}

	})
});
