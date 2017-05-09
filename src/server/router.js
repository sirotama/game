module.exports = () => {
    const router = require('koa-router')();
    const GameManager = require('./gamemanager');

    router.get('/', async (ctx, next) => {
        ctx.app.use(GameManager);
    });

    return router.routes();
}
