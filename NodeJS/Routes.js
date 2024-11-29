const fs = require('fs');


const requestHandler = (req, res) =>{
const url = req.url;
const method = req.method;
// get the reequest based on url
if (url === '/') {
    res.setHeader('Content-type', 'text/html');   // to say which type file we can take input
    res.write('<html> <head> <title> Dhanushkumar - form </title> </head>  <body> <h1> Enter the form details </h1> <form  action="/message" method="POST"> <input type="text" placeholder="enter the name" name="name" /> </br>  </br> <input type="submit" value="send"/> </form> </body></html>')
   return res.end()  // used to say the response is completed
}
// else{
//     res.setHeader('Content-type', 'text/html');   // to say which type file we can take input
//     res.write('<html> <head> <title> Dhanushkumar </title> </head>  <body> <h1> hello from server.js </h1> </body><html>')
//    return res.end()
// }

// redirect the response
if (url === '/message' && method == 'POST') {

    const body = [];

    req.on('data', (chunck) => {  // node ja send some event to say us the data has been arrived
        // console.log(chunck); // all data send can't be go in an single formate it will go on the little chuncks  // over duty too collect all and assign to a single data

        body.push(chunck)  // to pus the each and every data into the body array[]

    })
     // the end method is used to say that the message or data will sucessfully ended
     // it is called asynchoronus code
      return  req.on('end', () => {  // to use return to avoid exection of another codes below
            const parsedBody = Buffer.concat(body).toString()   ;  // to join all the buffer data and convert buffer to string data type
            // console.log(parsedBody);

            const message = parsedBody.split('=') // used to split the key and value seperately
            console.log(message);

            fs.writeFile('hello.txt', message[1],(err) => {
                res.setHeader('Location', '/'); // location set us to say which location we want to redirection
                res.statusCode = 302;  // we need to set status code for redirection 302 is for redirection
                return res.end();
            });  // writeFileSync is used to create the file and input the data i waiting for chages is synchrones so we use writefile
          //  fs.writeFileSync('hello.txt', 'dummy')  // now it will be appear
             })
        }
    }

// module.exports = requestHandler;   // is used to export single function

//module.exports = {handler: requestHandler, someText: "hello world from modules"} // to used to send multiple modules or functions

// exports.handler = requestHandler;
// exports.someText = "hello world from modules";


module.exports.handler = requestHandler;
module.exports.someText = "hello world from modules";
