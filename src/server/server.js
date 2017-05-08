const koa = require('koa');
const app = new koa();

// load a router
require('./render')(app);

app.use(require('./router')(app));

app.listen(3000);