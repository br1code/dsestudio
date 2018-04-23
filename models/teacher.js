const mongoose = require("mongoose");

let teacherSchema = new mongoose.Schema({
    name: String,
    fullname: String,
    email: String,
    category: String
});

let teacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = teacherModel;

// prob
// Problemáticas Socio Contemporaneas

// udi2
// Unidad de Definición Institucional 2

// ing2
// Inglés Técnico 2

// inde
// Innovación y Desarrollo Emprendedor

// estd
// Estadística

// pro1
// Programación 1

// ing2
// Ingreniería de Software 2

// bdd1
// Bases de Datos 1

// ppf1
// Práctica Profesionalizante 1