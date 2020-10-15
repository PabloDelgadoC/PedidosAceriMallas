const {Router} = require('express');
const router = Router();

const { renderAdministradoresForm,
    renderAdministradorForm,
    createAdministrador, 
    createAdministrador2,
    obtenerAdminxCuenta, 
    modificarAdmin,
    eliminarAdmin 
} =require('../controladores/admin.controler');

const { esAutenticado } = require('../helper/autenticador');

//renderizar las pantallas
router.get('/administradores/all',esAutenticado, renderAdministradoresForm);  // este si vale
router.get('/administrador',esAutenticado, renderAdministradorForm);     // aun no vale, pero es para agregar uno nuevo

//agregar
router.post('/administrador/add',esAutenticado, createAdministrador);      //este si vale
router.post('/administrador/add2',esAutenticado, createAdministrador2);    //este si vale

//editar
router.get('/administrador2/edit/:id',esAutenticado, obtenerAdminxCuenta); 
router.put('/administrador2/edit/:id',esAutenticado, modificarAdmin);  

//eleminar
router.delete('/administrador/delete/:id',esAutenticado, eliminarAdmin);  //este ya sirve

module.exports = router;