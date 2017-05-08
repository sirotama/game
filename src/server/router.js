module.exports = function(){
    const router = require('koa-router')();

    router.get('/test', function* (){
        this.body = 'hello world';
    })
    return router.routes();
}
