//#region // < How to load test with 'oha' and 'wrk'
/*
1- If you are testing a server on the same machine, you can use both 'oha' or 'wrk'
2- If you are testing a server on a different machine, you should use 'wrk', cause it can spawn multiple threads to fire more concurrent requests to the target server.
3- It's better to manage your servers with pm2, it doesn't add a big overhead and makes the process managing the server easier, from start to reload to stop to monitor logs and so on. 
*/
//#endregion
