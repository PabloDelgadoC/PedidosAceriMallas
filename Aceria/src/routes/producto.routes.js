const {Router} = require('express');
const router = Router();

const { 
    renderProductosForm,
    renderProductForm,
    createProduct,
    findProduct,
    rendereditProduct,
    editProduct,
    eliminarProduct
} =require('../controladores/producto.controler');

const { Autenticado } = require('../helper/autenticador');

//renderizar las pantallas
router.get('/producto/all',         Autenticado, renderProductosForm );  
router.get('/producto',             Autenticado, renderProductForm);          

//agregar
router.post('/producto/add',        Autenticado, createProduct );  

//buscardores
router.post('/producto/find',       Autenticado, findProduct );          

//editar
router.get('/producto/edit/:id',    Autenticado, rendereditProduct);    
router.put('/producto/edit/:id',    Autenticado, editProduct);         

//eleminar
router.delete('/producto/delete/:id', Autenticado,  eliminarProduct);      

module.exports = router;