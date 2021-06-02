// import
const Express = require('express')
const Dotenv = require('dotenv')
const Bodyparser = require('body-parser')
const { httpServer } = require('./servers')

// general config
Dotenv.config()

// express app
const App = Express()

App.use(Bodyparser.raw())
App.disable('x-powered-by');
App.use(require('./routes'))

// server part
httpServer(App).listen("3000", console.log(`Server listening on 3000`))

