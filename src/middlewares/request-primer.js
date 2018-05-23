module.exports = function requestPrimerFn (options) {
    console.log('applying', options);
    return (req, res, next) => next();
};