const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './src/Paginas/Chamada.html'; 
    }
//determina o tipo do arquvo
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') { //caso nao encontre o arquivo
                fs.readFile('./src/Paginas/script.js', (err, content) => { //arquivo especifico
                    if (err) {
                        res.writeHead(500);
                        res.end(`Erro interno do servidor: ${err.code}`); //qualquer outro erro do especifico
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' }); // especifico nao encontrado
                        res.end(content, 'utf8');
                    }
                });
            } else {
                res.end(`Erro interno do servidor: ${err.code}`);//erro 
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });//OK
            res.end(content, 'utf8');
        }
    });

  
});

const PORT = process.env.PORT || 8000; 
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});