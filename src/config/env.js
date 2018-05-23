module.exports = function envOverrides () {
    return {
        server:{
            port: process.env.PORT || 3000,
        }
    }
};