const Http = require('http')

/*
*	exports the http server
*/
module.exports = (ExpressApp)=>{
	return Http.createServer(ExpressApp)
}
