const http = require('http');

const server = http.createServer((req,res) => {

const numb1 = 10;
const numb2 = 20;

res.writeHead(200, { "Content-Type": "text/html" }); 

    switch (req.url) {
        case "/sum":
        res.end((numb1 + numb2).toString());
        break;
    
        case "/mul":
        res.end((numb1 * numb2).toString());
        break;

        case "/sub":
        res.end((numb1 - numb2).toString());
        break;

        case "/div":
        res.end((numb1 / numb2).toString());
        break;
        
            
        default:
            res.end("Url is not found!");
        
            
    }

} )



const port = process.env.PORT || 5000;
server.listen(port, () => {console.log("The Server is running on port: " + port)})