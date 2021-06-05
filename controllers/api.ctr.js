const ServerJS = require('tofa-server-js')
const {CallRejected, BadURI, CallForbidden} = require('tofa-server-js/src/errors')

/**
 * Controller methods launched amid api calls
 */
module.exports = {

    reg(req, res){
        ServerJS.reg(req.body.uri, {
            name: "Tofa Demo",
            description: "Tofa Demo website wants to register to your 2FA client."
        })
        .then(auth_token=>{
            res.send({ auth_token })
        })
        .catch(err=>{
            let message = ''

            if(err instanceof BadURI)
                message = "Invalid URI!"
                
            if(err instanceof CallRejected)
                message = "Tofa Client denied registration!"

            res.status(500).send({message})
        })
    },

    ask(req, res){
        ServerJS.ask(req.body.uri, {
            auth_token: req.body.auth_token,
            description: "Tofa Demo website wants to perform a demo action (nothing in fact) and needs your permission."
        })
        .then(allowed=>{
            res.send({ allowed })
        })
        .catch(err=>{
            let message = ''

            if(err instanceof BadURI)
                message = "Invalid URI!"

            if(err instanceof CallForbidden)
                message = "Call forbidden! Authentication token bad/missing?"
                
            res.status(500).send({message})
        })
    },

    info(req, res){
        ServerJS.info(req.body.uri, {
            auth_token: req.body.auth_token,
            description: "Tofa Demo website has sent you a meaninngless notification."
        })
        .then(_=>{
            res.status(204).send()
        })
        .catch(err=>{
            let message = ''

            if(err instanceof BadURI)
                message = "Invalid URI!"

            if(err instanceof CallForbidden)
                message = "Call forbidden! Authentication token bad/missing?"

            res.status(500).send({message})
        })
    },

    /**
     * Responds the UTC timestamp. Used for Tofa Clients time checkup
     */
    getUTCTime(req, res){
        res.send({
            ts: new Date().getTime()
        })
    }
}
