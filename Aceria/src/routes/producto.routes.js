const {Router} = require('express');
const router = Router();

const { 
    renderProductsForm,
    RenderProductForm,
    createNewProduct,
    obtenerProductxId,
    modificarProductoxId,
    eliminarProducto,
    getProducts,
} =require('../controladores/producto.controler');

const { esAutenticado, verifyToken } = require('../helper/autenticador');

//renderizar las pantallas
router.get('/productos/all',esAutenticado, renderProductsForm);  
router.get('/producto',esAutenticado, RenderProductForm);     

//agregar
router.post('/producto/add',esAutenticado, createNewProduct);       

//editar
router.get('/producto2/edit/:id',esAutenticado, obtenerProductxId); 
router.put('/producto2/edit/:id',esAutenticado, modificarProductoxId);  

//eleminar
router.delete('/producto/delete/:id',esAutenticado,  eliminarProducto);  

//USERS MOVIL ROUTES
router.get('/api/products', verifyToken, getProducts);
module.exports = router;