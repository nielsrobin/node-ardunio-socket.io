var io = require('socket.io').listen(8888),
	five = require( 'johnny-five' ),
	board = new five.Board(),
	light;
 
 
// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {
	
	led = new five.Led(13);
	led.off();  
	light = false;

	io.sockets.on('connection', function (socket) {  
        socket.broadcast.emit('status', light );
	    
	    socket.on('status', function (data) {
	    	light = data;

			if(light) {
				led.on();
			}
			else
			{
				led.off();
			}
	    });
	}); 
});