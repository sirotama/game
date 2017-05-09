const koa = require('koa');
const app = new koa();

// router
const router = require('./router')()
const path = require('path');

const serve = require('koa-static');
app.use(serve(__dirname + '/../assets/'));

// regist to app
app.use(router);
require('./render')(app);

app.listen(3000);