const Router = require('express').Router()

module.exports = Router
    .use('/', require('./landing.route'))
    .use('/pub', require('./public.route'))
    .use('/api', require('./api.route'))
