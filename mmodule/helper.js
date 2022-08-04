const fs = require('fs');
const url= require('url');


function renderHTML(path,res){
  fs.readFile(path,(err, data)=> {
    if (err) {
      
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
      
      
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}
function render404(res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  return res.end("404 Not Found");
}
function onRequest(req,res){
  var path = url.parse(req.url).path;
  console.log(path);
  
  // if (path=='/about') {
  //   renderHTML('./views/about.html',res);
  // } else {
  //   renderHTML('./views/demo.html',res);
  // }
  switch (path) {
    case '/':
      renderHTML('./views/demo.html',res);
      break;
    case '/about':
      renderHTML('./views/demo.html',res);
    break;
  
    default:
      render404(res);
      break;
  }
  

}
module.exports={
   
    onRequest:function onRequest(req,res){
        var path = url.parse(req.url).path;
        console.log(path);
        
        // if (path=='/about') {
        //   renderHTML('./views/about.html',res);
        // } else {
        //   renderHTML('./views/demo.html',res);
        // }
        switch (path) {
          case '/':
            renderHTML('./views/demo.html',res);
            break;
          case '/about':
            renderHTML('./views/demo.html',res);
          break;
        
          default:
            render404(res);
            break;
        }
        
      
      },
};

