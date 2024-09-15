const cluster = require("cluster")
const http = require("http")
// const os = require("os")

// const numCPUs = os.cpus().length
let numCPUs = navigator.hardwareConcurrency
if (cluster.isMaster) {
	console.log(`Master process ${process.pid} is running`)

	// Fork workers for each CPU core
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork()
	}

	// If a worker dies, log it and optionally fork a new worker
	cluster.on("exit", (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died`)
		console.log("Starting a new worker...")
		cluster.fork()
	})
} else {
	// Workers can share the TCP connection
	http
		.createServer((req, res) => {
			res.writeHead(200, { "Content-Type": "text/plain" })
			res.end("Hello World\n")
		})
		.listen(3002)

	console.log(`Worker ${process.pid} started`)
}
