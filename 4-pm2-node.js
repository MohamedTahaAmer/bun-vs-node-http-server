let http = require("http")
let server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" })
	res.end("Hello World\n")
})
server.listen(3004)

// pm2 start 04-node-pm2-cluster.js -i max
//#region // <
/*
this has Requests/sec:	142570.5653
*/
//#endregion
