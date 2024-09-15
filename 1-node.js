let http = require("http")
let server = http.createServer((req, res) => {
	res.end("Node!")
})
server.listen(3001)
