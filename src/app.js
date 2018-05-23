const Koa = require('koa');
const configureMiddlewares = require('./middlewares/configure');

exports.getApplication = () => {
    const app = new Koa();
    app.use(configureMiddlewares(app));
    return app;
};