// libraries
const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
app.use(serve(__dirname+'/../client'));
const server = app.listen(3000);

// GameManager
const map = require('map');

const io = require('socket.io').listen(server);
io.on('connection', (socket) => {
    socket.emit('init', 'aa');
});
