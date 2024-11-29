// require is used to get the modules from the file in current directely
const http = require('http');
const routes = require('./Routes')




/*
function requestListener(req, res){
    req = incoming message
    res = get the response from the server
    console.log("server is created");
}
    */

// localhost ip address = 127.0.0.1
// requestListener we give here the refference so we can;t call here
// const server = http.createServer((req, res) => {
    // console.log("server is created");


    // to take request url of an website
    // console.log(req.url);

    // to get the method of an website
    // console.log(req.method);

    // headers of an request it consistes of the important information of request
    // console.log(req.headers);


    // to stop the event listerner process
    // process.exit();
// })

// listen method is used to listen the server

console.log(routes.someText);


const server = http.createServer(routes.handler);

server.listen(3000)
