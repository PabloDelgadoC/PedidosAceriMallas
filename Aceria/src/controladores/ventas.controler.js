const VentasCtrl = {};

const venta=require('../modelos/ventas');
const pago=require('../modelos/pagos');
const calificacion=require('../modelos/calificacion');

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

    new_calificacion.servicio='App'
    new_calificacion.usuario='Pablo Delgado'
    new_calificacion.calificacion='5'
    
   
    await new_calificacion.save();
    req.flash('success_msg','Venta creada correctamente');
    res.redirect('/producto/all');

};

module.exports = VentasCtrl;