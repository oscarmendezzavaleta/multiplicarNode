const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .argv;
const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = 5;

let argv2 = process.argv;

console.log(argv.base);
console.log(argv.limite);
//console.log(argv2);
//let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));