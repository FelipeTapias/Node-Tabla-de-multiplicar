const { crearArchivo } = require('./helpers/multiplicar');
const color = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.listar, argv.h)
    .then(nombreArchiv => console.log(nombreArchiv.zebra,'creado'.rainbow))
    .catch(err => console.log(err))
