let http = require("http")
let server = http.createServer((req, res) => {
	res.end("Node!")
})
server.listen(3004)

// pm2 start 04-node-pm2-cluster.js -i max
//#region // <
/*
this has Requests/sec:	142570.5653

*/
//#endregion
