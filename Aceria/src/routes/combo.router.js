const {Router} = require('express');
const router = Router();

const { 
    renderCombosForm,
    renderComboForm,
    createCombo,
    obtenerComboxId,
    modificarCombo,
    eliminarCombo
} =require('../controladores/combo.controler');

const { esAutenticado } = require('../helper/autenticador');

//renderizar las pantallas
router.get('/combos/all',esAutenticado, renderCombosForm);  //lista normal
router.get('/combo',esAutenticado, renderComboForm);           // form de publicacion en blanco

//agregar
router.post('/combo/add',esAutenticado, createCombo);      //este si vale

//editar
router.get('/combo/edit/:id',esAutenticado, obtenerComboxId); 
router.put('/combo/edit/:id',esAutenticado, modificarCombo);  

//eleminar
router.delete('/combo/delete/:id',esAutenticado, eliminarCombo);  //este ya sirve


module.exports = router;