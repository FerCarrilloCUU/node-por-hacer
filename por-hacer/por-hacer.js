const fs = require('fs');

let listadoPorHacer = [];

const guararDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);

    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guararDB();

    return porHacer;
}


const getListado = () => {
    cargarDB();

    return listadoPorHacer;

}


const actualizar = (descripcion, completado = true) => {
    cargarDB();


    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guararDB();
        return true;
    } else { false; }

}


const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    try {
        if (index >= 0) {
            listadoPorHacer.splice(index, 1);
            guararDB();
            return true;
        } else { false; }
    } catch {
        return false;
    }
}

const borrar2 = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guararDB();
        return true
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    borrar2
}