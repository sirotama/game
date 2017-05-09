const GameManager = async (ctx, next) => {
    ctx.body = '123';
    console.log(ctx.body);
}
module.exports = GameManager;
