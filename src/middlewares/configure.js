const { get } = require('../config');
const debug = require('debug')('service:middleware-config');

/**
 * Dynamic middleware loading
 * lets you drive all middleware configuration option from the configuration file.
 * You can specify different configuration for different environments as you see
 * fit using a declaratively style
 *
 * middleware can either composed of npm packages or ones specified in the middleware folder.
 * middlewares are loaded in the order in which they are specified in the file. You will be
 * recognise with this way of loading middlewares if you are familiar loopback
 *
 * @param app
 */
module.exports = function configure(app) {
    const middlewares = get('middlewares');

    Object.keys(middlewares).forEach(mwName => {
        try{
            const mwInstance = require(mwName);
            const mwOptns = middlewares[mwName];
            app.use(mwInstance.call(null, mwOptns));
            debug(`loading middleware: ${mwName}`);
        } catch(e) {
            console.log(`Unable to load ${mwName} middleware. ${e.message}`);
        }
    });

    return (req, res, next) => next();
};