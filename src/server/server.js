const koa = require('koa');
const app = new koa();

// router
const router = require('./router')()

// regist to app
app.use(router);
require('./render')(app);

app.listen(3000);