const http = require("http");   
const fs = require('fs'); 


const users = [
    {user: 'user1'},
    { user: 'user2' },
    {user: 'user3'}
]

const server = http.createServer((req, res) => {
      console.log('I go your request', req.url)
  //    // res.writeHead(200, 'success');
  //     res.writeHead(200, {"Content-type": "application/json"})
  //     res.write(JSON.stringify({msg:"something"}))
  //     res.end()

  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Welcome to our web application</h1>");
      break;

      case "/about":
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write('<h1>About page</h1>');
          
      break;

    case "/admin":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ username: "admin" }));
          break;
      
      case '/api/users/':
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(users))
          break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h3>404 This url is not defined for web server</h3>");
      break;
  }

  res.end();
});

server.listen(5000, () => {
  console.log("server is up and running on port 5000");
});
