var socket = io('http://localhost:3000');
socket.on('popo', function (data) {
   console.log(data);
});
