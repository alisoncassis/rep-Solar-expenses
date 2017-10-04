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
    }
]

module.exports = routes
