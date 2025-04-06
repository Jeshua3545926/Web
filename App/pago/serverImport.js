
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

import { http, fs, path, fileURLToPath, fetch } from '../importaaciones/imports.js';
import config from './Api/env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PaymentServer {
    constructor() {
        this.ACCESS_TOKEN = config.token;
    }

    async createPreference() {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
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
                }]
            })
        });
        return await response.json();
    }

    async handlePostRequest(req, res) {
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

    serveHtmlFile(res) {
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

    createServer() {
        return http.createServer((req, res) => {
            if (req.method === 'POST' && req.url === '/create_preference') {
                this.handlePostRequest(req, res);
            } else {
                this.serveHtmlFile(res);
            }
        });
    }

    start(port = 3000) {
        const server = this.createServer();
        server.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
        return server;
    }
}

export default PaymentServer;

/*
Para usar este módulo en otro archivo, puedes importarlo así:

// Ejemplo de uso en app.js:
import PaymentServer from './serverImport.js';

// Crear una instancia del servidor
const paymentServer = new PaymentServer();

// Iniciar el servidor en el puerto deseado
paymentServer.start(3000);

// También puedes acceder a métodos individuales si es necesario
const server = paymentServer.createServer();
server.listen(4000);

Este enfoque modular permite:
1. Mejor organización del código
2. Reutilización de funcionalidad
3. Más fácil de testear
4. Mejor encapsulamiento de la lógica
5. Más flexible para modificaciones futuras
*/


