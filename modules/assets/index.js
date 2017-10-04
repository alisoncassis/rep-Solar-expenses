exports.register = function(server, options, next) {
    server.route(require('./routes'))
    next()
}

exports.register.attributes = {
    pkg: require('./package.json')
}
