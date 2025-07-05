const express = require('express');
const cors = require('cors');
const baseDatos = require('../database/conexion.js');

const rutas=require("../routes/rutas.js")


class ServidorModelo {

    constructor() {

        this.app = express()
        this.despertarBD()
        this.crearMiddlewares()
        this.llamarRutas()

    }

    despertarServidor() {
        this.app.listen(5000, function () {
            console.log("Servidor encendido")
        })
    }

    llamarRutas() {
        
        this.app.use('/',rutas)

    }

    crearMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    async despertarBD() {
        try {
          
            await baseDatos.authenticate();
            console.log("Estoy conectado a la BD");

        } catch (error) {
            throw new Error(error)
        }
    }

}

module.exports = ServidorModelo