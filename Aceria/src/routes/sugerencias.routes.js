'use strict'

const express = require('express');
const SugerenciaController = require('../controladores/sugerencias.controler');
const router = express.Router();

const { Autenticado } = require('../helper/autenticador');

/**RENDER VIEWS **/
router.get('/sugerencias', Autenticado, SugerenciaController.renderSugerencias);

/**API */
router.post('/sugerencias/create', SugerenciaController.createSugerencia);
router.delete('/sugerencias/delete/:id', Autenticado, SugerenciaController.deleteSugerencia);

module.exports = router;