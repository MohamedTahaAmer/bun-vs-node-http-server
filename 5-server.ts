Bun.serve({
	fetch(req) {
		return new Response("Bun!")
	},
	port: 3005,
	reusePort: true,
})

// log the process id
console.log(`Bun server started with pid ${process.pid}`)
