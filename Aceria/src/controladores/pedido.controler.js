const pedidoCtrl = {};

const pedido= require('../modelos/pedidos');
const detalle= require('../modelos/detallefactura');

pedidoCtrl.renderPedidopendienteForm = async (req,res) => {
    const pedidos = await pedido.find({estado: "pendiente"}).lean();
    res.render('app/pedido/pendiente',{pedidos});
};

pedidoCtrl.renderPedidoTransitoForm = async (req,res) => {
    const pedidos = await pedido.find({estado: "transito"}).lean();
    res.render('app/pedido/pendiente',{pedidos});

};

pedidoCtrl.renderPedidoCompletoForm = async (req,res) => {
    const pedidos = await pedido.find({estado: "completo"}).lean();
    res.render('app/pedido/pendiente',{pedidos});
};

pedidoCtrl.renderNewPedidoForm = (req,res) => {
    res.render('app/pedido/creapedido');
};

pedidoCtrl.createPedido = (req,res) => {
};

pedidoCtrl.findPedido = (req,res) => {
};

pedidoCtrl.renderPedidoDetalleForm = async (req,res) => {
    const pedido = await pedido.findById(req.params.id).lean();
    const detalle = await detalle.findById(req.params.id).lean();
    res.render('app/pedido/detalle',{pedido,detalle});

};

pedidoCtrl.renderEditPedido = async (req,res) => {
    const pedido = await pedido.findById(req.params.id).lean();
    const detalle = await detalle.findById(req.params.id).lean();
    res.render('app/pedido/editpedido',{pedido,detalle});
};

pedidoCtrl.editPedido = (req,res) => {
};

pedidoCtrl.eliminarPedido = async (req,res) => {
    await pedido.findByIdAndDelete(req.params.id);
    req.flash('success_deleted','Pedido eliminado');
    res.redirect('/pedido/pendiente');
};


module.exports = pedidoCtrl;


/*


LocalCtrl.createLocal = async (req,res) => {
    const errors = [];
    const {nombre,descripcion,direccion,coordx,coordy} = req.body;

    if(nombre.length < 5){
        errors.push({text: 'Codigo es muy corto, debe de tener minimo 5 caracteres'});
    }

    if(direccion.length < 10){
        errors.push({text: 'Direccion es muy corto, debe de tener minimo 5 caracteres'});
    }

    const locales = await local.findOne({nombre: nombre}).lean();
    if(locales){
        errors.push({text: 'Ya existe un Local con dicho codigo asignado'});
    }

    if(errors.length >0){
        res.render('app/locales/locales',{errors});
    }else{
        
        const puesto=new local();
        puesto.nombre = nombre;
        puesto.descripcion = descripcion;
        puesto.direccion = direccion;
        puesto.coordx = coordx;
        puesto.coordy = coordy; 

        if(req.file){
            puesto.img = 'uploads/' + req.file.filename;
        }
         
        await puesto.save();
        req.flash('success_msg','El Local ha sido creado correctamente');
        res.redirect('/locales/all');
        
    }

};

LocalCtrl.findLocal = async (req,res) => {
    const {buscadorBox} = req.body;
    const desc = await local.find({nombre: buscadorBox}).lean();
    res.render('app/locales/locales',{desc});

};



LocalCtrl.editLocal = async (req,res) => {

    const puesto = req.body;

    if(req.file){
        puesto.img = 'uploads/' + req.file.filename;
    }
    
    await local.findByIdAndUpdate(req.params.id, puesto);
    req.flash('success_updated','Promocion actualizado');
    res.redirect('/locales/all');

};

*/