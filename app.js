const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const userMapping = JSON.parse(process.env.USER_MAPPING);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

const users = Object.keys(userMapping);

users.forEach(user => {
    app.get(`/user/${user}`, (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'user.html'));
    });
});

app.get('/user-mapping', (req, res) => {
    res.json(userMapping);
});


app.get('/hello-world', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hello-world.html'));
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'call') {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'call', target: data.target, caller: data.caller }));
                }
            });
        } else if (data.type === 'response') {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'response', target: data.target, caller: data.caller, response: data.response }));
                }
            });
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
