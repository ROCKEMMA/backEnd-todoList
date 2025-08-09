const express = require('express');
const router = express.Router();

const getTareas = require('./get/obtenerTareas.js');

router.use(getTareas);


// EXPORTAR RUTAS
module.exports = router;