const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();

const PORT = process.env.PORT || 8080;

app.ws('/', (ws, req) => {
    console.log('CONNECTION');
    ws.on('message', (msg) => {
        msg = JSON.parse(msg);
        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg);
        }
        console.log(msg);
    })
})

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));


const connectionHandler = (ws, msg) => {
    ws.id = msg.id;
    broadcastConnection(ws, msg);
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(`Пользователь ${msg.username} подключен`)
        }
    })
}