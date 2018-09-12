var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});
socket.on('enviarMensaje', function(data) {
    console.log(data);
});
socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola mundo'
}, function(data) {
    console.log('Se disparo el callback:', data);
});