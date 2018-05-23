module.exports = function devConfiguration () {
    return {
        server:{
            port: 3000,
        },
        middlewares: {
            "koa-helmet": {},
            "./request-primer": {}
        }
    }
};