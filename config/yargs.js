const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const optsActualizar = {
    descripcion,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
    .command('listar', 'Lista las tareas por hacer')
    .command('borrar', 'Borra una tarea de la lista', descripcion)
    .help()
    .argv;


module.exports = {
    argv
}