Bun.serve({
	fetch(req) {
		return new Response("Bun!")
	},
	port: 3003, // You can set the port you want
	reusePort: true,
})

//#region // <
/*
pm2 start 'bun 3-pm2-bun.js' -i max

*/
//#endregion
