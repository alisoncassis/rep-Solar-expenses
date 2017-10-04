const Joi = require('joi')

const routes = [
    {
        method: 'GET',
        path: '/js/{file*}',
        handler: {
            directory: {
                path: 'public/js'
            }
        },
        config: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/css/{file*}',
        handler: {
            directory: {
                path: 'public/css'
            }
        },
        config: {
            auth: false
        }
    }
]

module.exports = routes
