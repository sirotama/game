module.exports = () => {
    const router = require('koa-router')();

    router.get('/test', async (ctx, next) => {
        ctx.body = 'hello world';
    });

    return router.routes();
}
