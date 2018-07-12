// var express = require('express');
// var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');

// var mdAutenticacion = require('..//middlewares/autenticacion');

// var app = express();

// var Hospital = require('../models/hospital');
// var Usuario = require('../models/usuario');

// // ==========================================
// // Obtener todos los hospitales (GET)
// // ==========================================

// app.get('/', (req, res, next) => {


//     Hospital.find({}, 'nombre img usuario')
//         .exec(
//             (err, hospitales) => {

//                 if (err) {
//                     return res.status(500).json({
//                         ok: false,
//                         mensaje: 'Error cargando hospitales',
//                         errors: err
//                     });

//                 }

//                 res.status(200).json({
//                     ok: true,
//                     hospitales: hospitales
//                 });

//             });


// });

// module.exports = app;