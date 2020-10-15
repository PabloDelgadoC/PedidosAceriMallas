const {Router} = require('express');
const router = Router();

const { 
    renderPublicaciones1Form,
    renderPublicaciones2Form,
    renderPublicacionForm,
    createPublicacion,
    obtenerPublicacionxID,
    modificarPublicacion,
    eliminarPublicacion
} =require('../controladores/blog.controler');

const { esAutenticado } = require('../helper/autenticador');

//renderizar las pantallas
router.get('/publicaciones/all',esAutenticado, renderPublicaciones1Form);  //lista normal
router.get('/publicaciones2/all',esAutenticado, renderPublicaciones2Form); //lista en formato

router.get('/publicacion',esAutenticado, renderPublicacionForm);           // form de publicacion en blanco

//agregar
router.post('/publicacion/add',esAutenticado, createPublicacion);      //este si vale

//editar
router.get('/publicacion2/edit/:id',esAutenticado, obtenerPublicacionxID); 
router.put('/publicacion2/edit/:id',esAutenticado, modificarPublicacion);  

//eleminar
router.delete('/publicacion/delete/:id',esAutenticado, eliminarPublicacion);  //este ya sirve


module.exports = router;