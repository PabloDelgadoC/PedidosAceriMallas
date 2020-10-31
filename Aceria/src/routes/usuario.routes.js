const {Router} = require('express');
const router = Router();

const { 
    renderUsuariosForms,
    renderUsuarioForm,
    createNewUser,
    obtenerUserxId,
    modificarUser,
    eliminarUser,
    createUSerMovil,
} =require('../controladores/users.controler');

const { esAutenticado } = require('../helper/autenticador');

//renderizar las pantallas
router.get('/usuarios/all',esAutenticado, renderUsuariosForms);  
router.get('/usuario',esAutenticado, renderUsuarioForm);     

//agregar
router.post('/usuario/add',esAutenticado, createNewUser);       

//editar
router.get('/usuario2/edit/:id',esAutenticado, obtenerUserxId); 
router.put('/usuario2/edit/:id',esAutenticado, modificarUser);  

//eleminar
router.delete('/usuario/delete/:id',esAutenticado, eliminarUser);  

//USERS MOVIL ROUTES
router.post('/signup', createUSerMovil);

module.exports = router;