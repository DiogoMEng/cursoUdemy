const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;


const server = http.createServer((req, res) => {

    const urlInfor = url.parse(req.url, true);
    const name = urlInfor.query.name;

    if(!name) {
        fs.readFile('./src/html/escrevendo_arquivos.html', function(err, data){
    
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
    
            return res.end();
    
        });
    } else {
        const nameNewLine = name + "\r\n" 

        // fs.writeFile("arquivo.txt", name, function(err, data) {

        //     res.writeHead(302, {
        //         location: '/'
        //     }); // status code = 302 (redirect)
            
        //     return res.end();

        // });

        fs.appendFile("arquivo.txt", nameNewLine, function(err, data) {

            res.writeHead(302, {
                location: '/'
            }); // status code = 302 (redirect)
            
            return res.end();

        });
    }


});

server.listen(port, () => {

    console.log('Servidor: http://localhost:3000/');
    
});