const Router = require('express').Router()
const {ApiCtr} = require('../controllers')

module.exports = Router
    .post('/reg', ApiCtr.reg)
    .post('/ask', ApiCtr.ask)
    .post('/info', ApiCtr.info)
