module.exports = function devConfiguration () {
    return {
        server:{
            port: 3000
        },
        middlewares: {
            "koa-bodyparser": {},
            "koa-helmet": {
                frameguard: {
                    action: 'deny'
                },
                hidePoweredBy: {
                    setTo: 'DONALD TRUMP'
                }
            },
            "pino-logger": {},
            "./you-can-delete-me": {}
        }
    }
};