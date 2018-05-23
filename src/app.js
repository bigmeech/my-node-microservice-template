const Koa = require('koa');
const helmet = require('koa-helmet');
const bodyparser = require('koa-bodyparser');
const configureMiddlewares = require('./middlewares/configure');

exports.getApplication = () => {
    const app = new Koa();
    app.use(configureMiddlewares(app));
    return app;
};