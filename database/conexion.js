const { Sequelize } = require('sequelize');

const baseDatos = new Sequelize("proyectobd", "root", "", {
    host: "localhost",
    dialect:"mysql"
})

module.exports=baseDatos