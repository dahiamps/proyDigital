const { DataTypes } = require('sequelize');
const baseDatos = require("../database/conexion.js");


const Usuario = baseDatos.define('usuarios', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    ciudad: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    usuario: {
        type: DataTypes.STRING
    }
})

module.exports = Usuario