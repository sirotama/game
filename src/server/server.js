const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
app.use(serve(__dirname+'/../client'));

const server = app.listen(3000);

const io = require('socket.io').listen(server);
io.on('connection', (socket) => {
    setInterval(() => {socket.emit('popo',{now:Date.now()})}, 10000);
});
