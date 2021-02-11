const {Router} = require('express');
const router = Router();

//importando modelos
const user=require('../modelos/usuarios');
const admin=require('../modelos/administrador');
const ventas=require('../modelos/ventas');
const pagos=require('../modelos/pagos');


//temporal
const ventasControlador=require('../controladores/ventas.controler')

const { 
    renderReportes,
} =require('../controladores/reportes.controler');

const { Autenticado } = require('../helper/autenticador');
const calificacion = require('../modelos/calificacion');

//renderizar las pantallas
router.get('/reportes',         Autenticado, renderReportes );  


//servicios de datos
router.get('/reportes/movil',async (req,res)=>{
    const usuarios = await user.find().lean();
    return res.send(usuarios)
})

router.get('/reportes/web',async (req,res)=>{
    const administradores = await admin.find().lean();
    return res.send(administradores)
})

router.get('/reportes/ventas',async (req,res)=>{
    const dataVentas = await ventas.find().lean();
    return res.send(dataVentas)
})

router.get('/reportes/pagos',async (req,res)=>{
    const dataPagos = await pagos.find().lean();
    return res.send(dataPagos)
})

router.get('/reportes/calificaciones',async (req,res)=>{
    const dataCalifica = await calificacion.find().lean();
    return res.send(dataCalifica)
})

//agregar
router.get('/ventas/add',        Autenticado, ventasControlador.createVenta );  
router.get('/pagos/add',        Autenticado, ventasControlador.createPago );  
router.get('/califica/add',        Autenticado, ventasControlador.crearCalificacion );
router.post('/califica/add', async (req,res)=>{
    console.log('hola')

    let servicio=req.body.servicio;
    let usuario=req.body.usuario;
    let puntaje=req.body.calificacion;

    console.log('servicio: ',servicio)
    console.log('usuario: ',usuario)
    console.log('calificacion: ',puntaje)

    const new_calificacion=new calificacion();
    new_calificacion.servicio=servicio
    new_calificacion.usuario=usuario
    new_calificacion.calificacion=puntaje
    
   
    await new_calificacion.save();
    return res.send({'resp': 'exito'})

});  

module.exports = router;