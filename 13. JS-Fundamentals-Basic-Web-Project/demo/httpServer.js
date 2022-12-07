const http = require('http');

const app = http.createServer(function(req, res) {
    console.log('hello world');

    res.write('Hello World from server');
    res.end();
});

app.listen(5000);
console.log(`Server is listening on port 5000...`);