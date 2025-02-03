const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let documentContent = ""; // Stores the shared document content

wss.on('connection', (ws) => {
    console.log('New client connected');

    // Send the current document state to the newly connected client
    ws.send(JSON.stringify({ type: 'init', data: documentContent }));

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage.type === 'update') {
                documentContent = parsedMessage.data; // Update global document content
                
                // Broadcast update to all other clients (excluding the sender)
                wss.clients.forEach((client) => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'update', data: documentContent }));
                    }
                });
            }
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

const PORT = 5001;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
