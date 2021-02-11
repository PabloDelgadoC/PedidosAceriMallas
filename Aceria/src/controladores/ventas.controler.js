const VentasCtrl = {};

const venta=require('../modelos/ventas');
const pago=require('../modelos/pagos');
const calificacion=require('../modelos/calificacion');
const cupones=require('../modelos/cupones');

VentasCtrl.createVenta = async (req,res) => {
            const new_venta=new venta();

            new_venta.producto='Rejillas electro soldadas'
            new_venta.categoria='Rejillas'
            new_venta.cantidad='10'
            new_venta.total='400'
            new_venta.fecha='06/02/2021'
           
            await new_venta.save();
            req.flash('success_msg','Venta creada correctamente');
            res.redirect('/producto/all');
    
};

VentasCtrl.createPago = async (req,res) => {
    const new_pago=new pago();

    new_pago.npedido='3'
    new_pago.usuario='Karina Parraga'
    new_pago.monto='50'
    
   
    await new_pago.save();
    req.flash('success_msg','Venta creada correctamente');
    res.redirect('/producto/all');

};


VentasCtrl.crearCalificacion = async (req,res) => {
    const new_calificacion=new calificacion();

    let servicio=req.body.servicio;
    let usuario=req.body.usuario;
    let calificacion=req.body.calificacion;

    console.log('servicio: ',servicio)
    console.log('usuario: ',usuario)
    console.log('calificacion: ',calificacion)

    new_calificacion.servicio=servicio
    new_calificacion.usuario=usuario
    new_calificacion.calificacion=calificacion
    
   
    await new_calificacion.save();
    req.flash('success_msg','Venta creada correctamente');
    res.redirect('/producto/all');

};


VentasCtrl.crearCupon = async (req,res) => {
    const new_cupones=new cupones();

    new_cupones.codigo='cup_567';
    new_cupones.canjeado=false;
    new_cupones.porcentaje=10;
    
   
    await new_cupones.save();
    req.flash('success_msg','Venta creada correctamente');
    res.redirect('/producto/all');

};


module.exports = VentasCtrl;