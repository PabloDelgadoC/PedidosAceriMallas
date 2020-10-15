const {Router} = require('express');
const router = Router();

const { 
    renderPendientesForm,
    renderTransitoForm,
    renderCompletadosForm,
    renderPedidoForm,
    obtenerPedidoxId,
    modificarPedido,
    createPedido,
    renderMensajeForm,
    createMensaje
} =require('../controladores/pedidos.controler');

const { esAutenticado } = require('../helper/autenticador');

//renderizar las pantallas
router.get('/pendientes/all',esAutenticado, renderPendientesForm);  
router.get('/transito/all',esAutenticado, renderTransitoForm);
router.get('/completados/all',esAutenticado, renderCompletadosForm ); 
router.get('/pedido',esAutenticado, renderPedidoForm)
router.get('/mensajes',esAutenticado, renderMensajeForm)

//agregar
router.post('/pedido/add',esAutenticado, createPedido);
router.post('/mensajes/add',esAutenticado, createMensaje);    

//modificar pedidos
router.get('/pedido/edit/:id',esAutenticado, obtenerPedidoxId );
router.put('/pedido/edit/:id',esAutenticado, modificarPedido); 


module.exports = router;