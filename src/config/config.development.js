module.exports = function devConfiguration () {
    return {
        server:{
            port: 3000
        },
        middlewares: {
            "koa-bodyparser": {},
            "koa-helmet": {},
            "./request-primer": {}
        }
    }
};