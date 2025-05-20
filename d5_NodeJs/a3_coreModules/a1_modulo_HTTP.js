const http = require('http');

const port = 3000; // porta servidor

const server = http.createServer((req, res) => {

    // res.write('Teste'); // resposta ao usuário

    res.statusCode = 200; // mensagem: sucesso.

    res.setHeader('Conteny-type', 'text/html'); // altera o header da aplicação permitindo o envio de tags HTML.

    res.write(req.url);

    res.end('<h1>Enviando html pelo servidor</h1>'); // obrigatório para finalizar uma resposta.

});

server.listen(port, () => {

    console.log(`Servidor na porta ${port}\nhttp://localhost:3000/`);

});