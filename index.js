
const fs = require("fs");
let http = require("http");
let server = http.createServer((req, res) => {
if(req.url=="/"){

  let getData=fs.readFileSync("Home.html")
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(getData);
    res.end()
}
else if(req.url=="/about"){
  res.writeHead(200,{"Content-Type":"text/html"});
    res.write(
    `<h2>This is About Page</h2>
    <button onclick="button2()">Click About</button>
    `);
    res.end()

}
else if(req.url=="/contact"){
  res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`<p>This is contact Page</p>`);
    res.end()

}
})

function button2(){
  alert("This is About click")
}


server.listen(3030);
console.log("Server Run Success")
