const { Router } = require("express");
const rutas = Router();

const { listarUsuarios } = require('../controllers/usuarioControlador')
const { ingresarUsuario } = require('../controllers/usuarioControlador')


//Ruta para buscar los usuarios registrados
rutas.get('/DS/V1/Usuarios', listarUsuarios)


//Ruta para buscar todos los hospedajes disponibles
rutas.get('/DS/V1/Hospedaje', function (req, res) {
    res.send('Buscando Hospedajes')
})

//Ruta para buscar un hospedaje en especifico
rutas.get('/DS/V1/Hospedaje:id', function (req, res) {
    res.send('Buscando 1 Hospedaje')
})

//Ruta para registrar un usuario

rutas.post('/DS/V1/Usuarios',ingresarUsuario)

//Ruta para registrar un hospedaje

rutas.post('/DS/V1/Hospedaje', function (req, res) {
    res.send('Registrar un  hospedaje')
})

//Ruta para buscar un hospedaje en especifico
rutas.put('/DS/V1/Hospedaje:id', function (req, res) {
    res.send('Editando estado de un hospedaje')
})


module.exports=rutas
