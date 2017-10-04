const Joi = require('joi')

const routes = [
    {
        method: 'GET',
        path: '/v1/auth',
        handler: function(request, reply){
            require('./auth').sign(request.query.email, request.query.password)
                .then(result => reply({token: result.token}).code(result.statusCode))
                .catch(err => console.log(err))
        },
        config: {
            auth: false,
            validate: {
                query: {
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                }
            }
        }
    }
]

module.exports = routes
