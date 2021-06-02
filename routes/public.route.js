const Router = require('express').Router()

/**
 * Handles public folder data
 */
module.exports = Router
.get('/pub/:target(*)', (req, res, next)=>{
    let p = require('path').resolve(`${__dirname}/../public/${req.params.target}`)
    res.setHeader("Cache-Control", `max-age=${60*15}, must-revalidate`)
    res.sendFile(p, function(e){
        if(e){
            res.status(404).send("Not found.")
        }
    })
})
