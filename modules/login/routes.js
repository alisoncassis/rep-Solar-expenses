const Joi = require('joi')

const routes = [
    {
        method: 'GET',
        path: '/login',
        handler: function(request, reply){
            reply.view('login')
        },
        config: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply){
            reply.view('home')
        },
        config: {
            auth: 'session'
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: function(request, reply){
            require('./login')(request.payload.email, request.payload.password)
                .then(user => {
                    request.cookieAuth.set(user);
                    return reply().code(200);
                })
                .catch(err => reply(err.data).code(err.statusCode))
        },
        config: {
            auth: false,
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    password: Joi.string().required()
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/logout',
        handler: function (request, reply) {
            request.auth.session.clear();
            return reply().code(200);
        },
        config: {
            auth: false
        }
    }
]

module.exports = routes
