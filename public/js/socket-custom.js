var socket = io();

// Los on son para escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor.');
});

// Los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'William',
    mensaje: 'Hola mundo'
}, (msg) => {
    console.log(msg);
});

socket.on('enviarMensaje', (mensaje) => {
    console.log('Info del Servidor: ', mensaje);
});