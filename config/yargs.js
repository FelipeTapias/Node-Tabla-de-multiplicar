const argv = require('yargs')
      .option(
        'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla a generar'
        })
      .option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
        })
      .option(
        'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Cantidad de veces a multiplicar la base'
        })
        
      .check((argv, options) => {
          if( isNaN(argv.b) || isNaN(argv.h) ) {
            throw 'Los argumentos deben ser números'
          }
          return true;
      })
      .argv;

module.exports = argv;