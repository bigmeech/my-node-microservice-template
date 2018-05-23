const path = require('path');
const { merge, get } = require('lodash');
const envOverrides = require('./env');

const currentEnv = process.env.NODE_ENV || 'development';
const config = getConfigByEnv(currentEnv);

/**
 * get config by environment. Default to development env config
 * @param curEnv
 * @returns {*}
 */
function getConfigByEnv(curEnv) {
    return require(path.resolve(__dirname, `config.${curEnv}.js`))();
}

const _config = merge({}, config, envOverrides());

/**
 * return a value by key path. Crash and burn if no such key has been set
 * @param key
 * @returns {*}
 */
exports.get = function getConfigValue(key) {
    const configValue = get(_config, key);

    if(!configValue) {
        throw new Error(`Could not find configuration for ${key}`);
    }
    return configValue;
};