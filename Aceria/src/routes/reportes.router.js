const {Router} = require('express');
const router = Router();

//importando modelos
const user=require('../modelos/usuarios');
const admin=require('../modelos/administrador');


const { 
    renderReportes,
} =require('../controladores/reportes.controler');

const { Autenticado } = require('../helper/autenticador');

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


module.exports = router;