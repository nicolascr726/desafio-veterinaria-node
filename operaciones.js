const fs = require('fs');
// const citas = []
// fs.writeFileSync('citas.json', JSON.stringify(citas) )

function registrar(nombre, edad, animal, color, enfermedad) {
    argumentos = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    };
const data = fs.readFileSync('citas.json', 'utf8');
const cita = JSON.parse(data)
cita.push(argumentos);
fs.writeFileSync('citas.json', JSON.stringify(cita) )
};


function leer(){
const formularios = fs.readFileSync('citas.json', 'utf8')
JSON.parse(formularios).forEach((mascota) => {
    console.log(mascota)
   })
};

module.exports = { registrar, leer};