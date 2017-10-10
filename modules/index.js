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
    {register: require('./assets')},
    {register: require('./cookie')},
    {register: require('./login')}
]

module.exports = modules
