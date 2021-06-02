const Router = require('express').Router()

module.exports = Router
    .use(require('./landing.route'))
    .use(require('./public.route'))
