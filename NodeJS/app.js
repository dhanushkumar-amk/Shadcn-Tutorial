// require is used to get the modules from the file in current directely
const http = require('http');
const fs = require('fs');

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

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

   // get the reequest based on url
    if (url === '/') {
        res.setHeader('Content-type', 'text/html');   // to say which type file we can take input
        res.write('<html> <head> <title> Dhanushkumar - form </title> </head>  <body> <h1> Enter the form details </h1> <form action="/message" method="POST"> <input type="text" placeholder="enter the name" name="name" /> </br> <input type="submit" value="send"/> </form> </body></html>')
       return res.end()  // used to say the response is completed
    }
    else{
        res.setHeader('Content-type', 'text/html');   // to say which type file we can take input
        res.write('<html> <head> <title> Dhanushkumar </title> </head>  <body> <h1> hello from server.js </h1> </body><html>')
       return res.end()
    }

    // redirect the response
    if (url === '/message' && method == 'POST') {
        fs.writeFileSync('hello.txt', 'dummy')
        res.setHeader('Location', '/'); // location set us to say which location we want to redirection
        res.statusCode = 302;  // we need to set status code for redirection 302 is for redirection
        res.end();
    }
})

server.listen(3000)
