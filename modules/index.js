const path = require('path')

const modules = [
    {register: require('hapi-auth-cookie')},
    {
        register: require('hapi-redirect'),
        options: [
            {
                status_code: 401,
                redirect: "/login"
            },
            {
                status_code: 403,
                redirect: "/"
            }
        ]
    },
    {register: require('vision')},
    {register: require('inert')},
    {register: require(path.join(__dirname, './assets'))},
    {register: require(path.join(__dirname, './cookie'))},
    {register: require(path.join(__dirname, './login'))}
]

module.exports = modules
