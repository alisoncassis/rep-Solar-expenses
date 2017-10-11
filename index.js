const dotenv = require('dotenv').config()
const path = require('path')
const Hapi = require('hapi')
const server = new Hapi.Server()
const db = require(path.join(__dirname, './database/mongo'))
const modules = require(path.join(__dirname, './modules'))
const mlabURL = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASSWORD}@ds163294.mlab.com:63294/rep-solar`

server.connection({
    port: process.env.PORT || 3000
})

server.register(modules, err => {
    if (err) console.log('failed to load plugin: ', err)
})

server.views({
    engines: {
        html: require('handlebars')
    },
    path: __dirname + '/dist',
    isCached: false
})

db.connect(mlabURL, err => {
    if (err) {
        console.log('Unable to connect to Mlab')
    }
    console.log('connected to Mlab')
    server.start(err => {
        if (err) console.log(err)
        console.log(`server running on PORT ${server.info.uri}`)
    })
})
