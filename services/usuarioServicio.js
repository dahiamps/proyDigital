const Usuario = require('../models/UsuarioModelos.js');

async function buscarInfoUsuario() {
    return await Usuario.findAll();
}

async function registrarInfoUsuario(usuarioInfo) {

    let registrarUsuario = new Usuario(usuarioInfo);
    return await registrarUsuario.save()

}

module.exports={
    buscarInfoUsuario,
    registrarInfoUsuario
}
