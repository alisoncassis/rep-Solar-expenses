const routes = [
    {
        method: 'GET',
        path: '/js/{file*}',
        handler: {
            directory: {
                path: 'dist/js'
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
                path: 'dist/css'
            }
        },
        config: {
            auth: false
        }
    }
]

module.exports = routes
