import PaymentServer from './serverImport.js';

const paymentServer = new PaymentServer();
paymentServer.start(3000);

const server = paymentServer.createServer();
server.listen(4000);

