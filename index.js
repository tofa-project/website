// import
const Express = require('express')
const Dotenv = require('dotenv')
const Bodyparser = require('body-parser')
const { httpServer } = require('./servers')
const {ServerJS} = require('./logic')

// general config
Dotenv.config()
ServerJS.init('127.0.0.1:9050')

// express app
const App = Express()

App.use(Bodyparser.json())
App.disable('x-powered-by');
App.use(require('./routes'))

// server part
httpServer(App).listen("3000", console.log(`Server listening on 3000`))

