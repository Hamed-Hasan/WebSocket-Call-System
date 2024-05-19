const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const userMapping = JSON.parse(process.env.USER_MAPPING);
const onlineUsers = new Set();

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
    let userId;

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'connect') {
            userId = data.userId;
            onlineUsers.add(userId);
            broadcastUserStatus();
        } else if (data.type === 'call' || data.type === 'response' || data.type === 'call_timeout') {
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });
        }
    });

    ws.on('close', () => {
        if (userId) {
            onlineUsers.delete(userId);
            broadcastUserStatus();
        }
    });

    const broadcastUserStatus = () => {
        const statusMessage = JSON.stringify({
            type: 'status_update',
            onlineUsers: Array.from(onlineUsers),
        });

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(statusMessage);
            }
        });
    };
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
