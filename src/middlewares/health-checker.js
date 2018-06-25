module.exports = function healthCheckerMw (options) {
    /**
     * check development config to see how this was delcaratively loaded into the middleware stack.
     * console.log('applying', options);
     * */
    return (ctx, next) => {
        if(ctx.path === options.path && ctx.method === options.method) {
            ctx.body = '';
            return;
        }
        next()
    };
};