const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({ port: 3232 });

WSS.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Convert the message from Buffer to string
        const messageStr = message.toString('utf-8');
       console.log('Broadcasting message:', messageStr);


        WSS.clients.forEach((client) => {
            if (client.readyState === client.OPEN) {
                // Send the stringified message to other clients
                client.send(messageStr);
            }
        });
    });

    console.log('We are connected');
});
