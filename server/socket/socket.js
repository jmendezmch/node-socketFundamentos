const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    // client.emit('enviarMensaje', {
    //     usuario: 'Admin',
    //     mensaje: 'Bienvenido'
    // });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // callback({
        //     recibido: true,
        //     usuario: false
        // });
    });
});