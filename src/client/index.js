var socket = io('http://localhost:3000');
socket.on('init', function (data) {
   console.log(data);
});
