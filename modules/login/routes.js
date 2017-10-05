const title = 'teste'
const routes = [
    {
        method: 'GET',
        path: '/login',
        handler: function(request, reply){
            reply.view('login', {title: 'title'})
        },
        config: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/private',
        handler: function(request, reply){
            reply.view('login', {title: 'title'})
        }
    }
]

module.exports = routes
