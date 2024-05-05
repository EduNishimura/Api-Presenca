const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // necessário se estiver usando SSL (recomendado para segurança)
    }
});

client.connect()
    .then(() => console.log('Conectado ao Banco de Dados'))
    .catch(err => console.error('Erro de conexão:', err.stack));

module.exports = client;