exports.register = function(server, options, next) {

    server.auth.strategy('session', 'cookie', true, {
        password: process.env.TOKEN_SECRET,
        cookie: 'session',
        ttl: 24 * 60 * 60 * 1000,
        isSecure: false,
    });
    next()
}

exports.register.attributes = {
    pkg: require('./package.json')
}
