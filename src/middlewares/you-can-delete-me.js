module.exports = function requestPrimerFn (options) {
    /**
     * check development config to see how this was delcaratively loaded into the middleware stack.
     * console.log('applying', options);
     * */
    return (req, res, next) => next();
};