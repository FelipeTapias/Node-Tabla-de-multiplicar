//En esta ocasión estamos trabajando con el wirteFileAsync, el cual en sus
//parametros no necesita el callback para generar el error, como su otra contraparte
//el writeFile, que necesita un callback donde capturemos el error.

const fs = require('fs');
const color = require('colors');
const colors = require('colors/safe');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

  let salida = '';

  try {
    for(let i = 1; i <= hasta; i++) {
    let result = base*i;
    salida += `${base} x ${i} = ${result}\n`;
    }

    if(listar){
      console.log(colors.rainbow('Aplicación creada por:'));
      console.log(colors.trap('Andrés Felipe Tapias Tuberquia'));
      console.log('======================='.blue);
      console.log(colors.red.underline('    Tabla del:', base, '     '));
      console.log('======================='.blue);
      console.log(colors.rainbow(salida)); 
    }
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
    
  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivo
}

false
