// import
const Express = require('express')
const Dotenv = require('dotenv')
const Bodyparser = require('body-parser')
const { httpServer } = require('./servers')
const ServerJS = require('tofa-server-js')

// general config
Dotenv.config()
ServerJS.init('127.0.0.1:9050')

// express app
const App = Express()

App.use(Bodyparser.json())
App.use('/', (req, res, next)=>{
    res.set('onion-location', 'http://7o5hh2f6gdxusghkqphrgwhs3xjqogakmusscbs4ektjv42sqeft4iqd.onion')
    next()
})
App.disable('x-powered-by');
App.use(require('./routes'))

// server part
httpServer(App).listen("3000", '127.0.0.1', console.log(`Server listening on 127.0.0.1:3000`))

