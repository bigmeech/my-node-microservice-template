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
            "koa-pino-logger": {},
            "./health-checker":{
                method: 'HEAD',
                path: '/health'
            },
            "./you-can-delete-me": {}
        }
    }
};