const http = require('http');

const server= http.createServer((req,res) => {
    
})


// USE THIS!
const port = process.env.PORT || 5000;
server.listen(port, ()=>{console.log("server up on port",port)});