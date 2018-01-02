const queryString = require('query-string');
//var appRouter = require('./appRouter.js')
var http = require('http');
//var state = require('./inMemoryState.js');
//const allApps={
//	mongo: require('./apps/mongo'),
//	kross: require('./apps/mongo/kross/index.js')
//}

const server = http.createServer(function(request, response) {
    request.on('data', function(chunk) {
            body += chunk;
        })
        .on('end', function() {
        response.writeHead(200, "OK", {'Content-Type': 'text/html'});
        response.end('/r/node/httpGet/server.js<br /><script src="./index.js">static public</script>')
	})
	})
server.listen(8555, function() {})


