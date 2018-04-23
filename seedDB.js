const mongoose = require("mongoose");

const Category = require("./models/category");

const data = [
    {
        name: "prob",
        fullname: "Problemáticas Socio Contemporaneas"
    },
    {
        name: "udi2",
        fullname: "Unidad de Definición Institucional 2"
    },
    {
        name: "ing2",
        fullname: "Inglés Técnico 2"
    },
    {
        name: "inde",
        fullname: "Innovación y Desarrollo Emprendedor"
    },
    {
        name: "estd",
        fullname: "Estadística"
    },
    {
        name: "pro1",
        fullname: "Programación 1"
    },
    {
        name: "ins2",
        fullname: "Ingeniería de Software 2"
    },
    {
        name: "bdd1",
        fullname: "Bases de Datos 1"
    },
    {
        name: "ppf1",
        fullname: "Práctica Profesionalizante 1"
    }
];

function addCategories() {
    data.forEach(seed => {
        Category.create(seed, (err, category) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Added: ${category}`);
            }
        });
    });
}

module.exports = addCategories;