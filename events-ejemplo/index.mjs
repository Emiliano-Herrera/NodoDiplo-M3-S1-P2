import {EventEmitter} from 'events';

// Crear una instancia de EvenrEmitter
const emisor = new EventEmitter();

// Definir un evento personalizado
emisor.on('Saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

// Emitir el evento 'Saludo!'
emisor.emit('Saludo', 'Mundo');

