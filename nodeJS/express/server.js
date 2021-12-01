const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer();

const port = process.env.PORT || 8000;
server.listen(port,() => {console.log("Server is up and Running on: ",port)});

app.get('/home',(req,res)=> {
    console.log('this is a /home request handler');
    res.send({msg: "this object coming from server /home handler"}); // instead of res.write() + res.end();
});

    



app.post();
app.put();

app.delete()

