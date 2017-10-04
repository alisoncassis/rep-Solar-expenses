const modules = [
    {register: require('hapi-auth-jwt2')},
    {register: require('vision')},
    {register: require('inert')},
    {register: require('./assets')},
    {register: require('./auth')},
    {register: require('./login')}
]

module.exports = modules
