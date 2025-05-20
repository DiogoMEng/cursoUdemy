const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;


const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    const filename = q.pathname.substring(1);

    // verifica se tem html
    if(filename.includes('html')) {
        // verifica existência do arquivo
        if(fs.existsSync(filename)) {
            // renderiza arquivo acessado pelo usuário
            fs.readFile(filename, function(err, data){

                res.writeHead(200, { 'Contet-Type': 'text/html' });
                res.write(data);

                return res.end()

            });
        }
    } else {
        // renderiza arquivo acessado pelo usuário
        fs.readFile('404.html', function(err, data){

            res.writeHead(404, { 'Contet-Type': 'text/html' });
            res.write(data);

            return res.end()

        });
    }

});

server.listen(port, () => {

    console.log('Servidor: http://localhost:3000/');
    
});