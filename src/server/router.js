module.exports = () => {
    const router = require('koa-router')();

    router.get('/test', async (context, next) => {
        ctx.body = 'hello world';
    });

    return router.routes();
}
