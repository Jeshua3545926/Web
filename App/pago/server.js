import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import config from './Api/env.js'; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Token de mercado pago
const ACCESS_TOKEN = config.token;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/create_preference') {
        let body = '';

        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        items: [{
                            title: 'Inscripción Escolar',
                            quantity: 1,
                            currency_id: 'MXN',
                            unit_price: 500
                        }]
                    })
                });

                const data = await response.json();
                console.log('Respuesta de Mercado Pago:', data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ preferenceId: data.id }));
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error al crear la preferencia' }));
            }
        });
    } else {
        const filePath = path.join(__dirname, 'pagar.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
