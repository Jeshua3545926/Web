//                                          //
//            ¡IMPORTANTE!                  //
//   {NO MODIFICAR LA API EXISTENTE}        //
//                                          //
//                                          //
//   Nota: Favor de implementar lógica      //
//   para que los precios enviados desde    //
//   el frontend sean recibidos y procesados//
//   correctamente en el backend.           //
//                                          //

import { http, fs, path, fileURLToPath } from '../../../../../importaaciones/imports.js';
import fetch from 'node-fetch';
import config from '../../../../Api/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PaymentServer {
    constructor() {
        this.ACCESS_TOKEN = config.token;
    }

    async createPreference() {
        const response = await global.fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [{
                    title: 'Inscripción Escolar',
                    quantity: 1,
                    currency_id: 'MXN',
                    unit_price: 2500
                }],
            

            })
        });
        return await response.json();
    }

    async handlePostRequest(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', async () => {
            try {
                const data = await this.createPreference();
                console.log('Respuesta de Mercado Pago:', data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ preferenceId: data.id }));
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error al crear la preferencia' }));
            }
        });
    }
    //verificar si el pago fue aprobado o no y mostrar un mensaje en el frontend con un mensaje de pago aprobado o desaprobado

    
    //     ServerAprobed(res) {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end( `<script>alert("pago no aprobado")</script>`);
    // }
    //     serverPending(res) {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end( `<script>alert("pago pendiente")</script>`);
    //     }
    //     serverFailure(res) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.end( `<script>alert("pago fallido")</script>`);
    // }
    serveHtmlFile(res) {
        const filePath = path.join(__dirname, '../../page/pagar.html');
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

    createServer() {
        return http.createServer((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            if (req.method === 'POST' && req.url === '/create_preference') {
                this.handlePostRequest(req, res);
            } else if (req.url.endsWith('.js')) {
                // Servir archivos JavaScript
                const filePath = path.join(__dirname, '../../', req.url);
                fs.readFile(filePath, (err, data) => {
                    if (err) {
                        res.writeHead(404);
                        res.end('Archivo no encontrado');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.end(data);
                });
            } else if (req.url.endsWith('.css')) {
                // Servir archivos CSS
                const filePath = path.join(__dirname, '../../', req.url);
                fs.readFile(filePath, (err, data) => {
                    if (err) {
                        res.writeHead(404);
                        res.end('Archivo no encontrado');
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.end(data);
                });
            } else {
                // Servir el HTML por defecto
                this.serveHtmlFile(res);
            }
        });
    }

    start(port = 3000) {
        const server = this.createServer();
        const lines = [
            `╔══════════════════════════════════════════════════════════════════╗`,
            `║                                                                  ║`,
            `║   🚀 \x1b[36mServidor corriendo en: \x1b[32mhttp://localhost:${port} \x1b[35m🚀             ║`,
            `║                                                                  ║`,
            `╚══════════════════════════════════════════════════════════════════╝\x1b[0m`
        ];
        for (const line of lines) {
            console.log(`\x1b[35m${line}\x1b[37m`);
        }
                    
        // \x1b[30m - Color negro
        // \x1b[31m - Color rojo
        // \x1b[32m - Color verde
        // \x1b[33m - Color amarillo
        // \x1b[34m - Color azul
        // \x1b[35m - Color magenta
        // \x1b[36m - Color cyan
        // \x1b[37m - Color blanco
        // \x1b[0m  - Resetear color a predeterminado
            
        server.listen(port,'0.0.0.0');
        return server;
    }
}

export default PaymentServer;

/*
Para usar este módulo en otro archivo, puedes importarlo así:
import PaymentServer from './serverImport.js';
const paymentServer = new PaymentServer();
paymentServer.start(3000);
const server = paymentServer.createServer();
server.listen(4000);

*/


