const Router = require('express').Router()

module.exports = Router.get('/', (req, res)=>res.status(301).redirect('/pub/index.htm'))
