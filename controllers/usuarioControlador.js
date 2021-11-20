const { buscarInfoUsuario } = require('../services/usuarioServicio.js');
const { registrarInfoUsuario } = require('../services/usuarioServicio.js');

const { request, response } = require('express');

async function listarUsuarios(peticion = request, respuesta = response) {
    try {

        // llamo informacion de usuarios
        const usuariosInfo = await buscarInfoUsuario()
        respuesta.status(200).json({
            estado: true,
            mensaje: usuariosInfo
        })


    } catch (error) {
        respuesta.status(404).json({
            estado: false,
            mensaje: error
        })
    }
}

async function ingresarUsuario(peticion = request, respuesta = response) {

    let usuarioDatos = peticion.body;

    try {

        // llamo informacion de usuarios
        const registrarUsuario = await registrarInfoUsuario(usuarioDatos)
        respuesta.status(200).json({
            estado: true,
            mensaje: registrarUsuario
        })


    } catch (error) {
        respuesta.status(404).json({
            estado: false,
            mensaje: error
        })
    }



    
}


module.exports = {
    listarUsuarios,
    ingresarUsuario
}