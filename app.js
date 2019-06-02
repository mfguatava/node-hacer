var colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

//console.log(argv);
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        console.log('Crear...')
        break;
    case 'listar':
        let listado = porHacer.getListado();
        
        console.log("======  Por hacer =====".rainbow);
        for (let tarea  of listado) {
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}` .green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualizada...');
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminar = porHacer.eliminar(argv.descripcion);
        console.log(`Eliminado: ${eliminar}`.green);
        break;
    default:
        console.log('Comando no reconocido...');
        break;
}