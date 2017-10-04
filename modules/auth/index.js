exports.register = function(server, options, next) {

    server.route(require('./routes'))

    server.auth.strategy('jwt', 'jwt', {
        key: process.env.TOKEN_SECRET,
        validateFunc: require('./auth').verify,
        verifyOptions: {
            algorithms: ['HS256']
        }
    })

    server.auth.default('jwt')

    next()
}

exports.register.attributes = {
    pkg: require('./package.json')
}
