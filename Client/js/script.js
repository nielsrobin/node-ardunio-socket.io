var socket = io.connect('http://10.36.1.103:8888');

socket.on('status', function (data) {
    console.log("node: " + data);
});

$('button.on').click(function(){
    socket.emit('status', true);
    console.log('send on');
});

$('button.off').click(function(){
    socket.emit('status', false);
    console.log('send off');
});