const pedidoCtrl = {}

const carrito = require('../modelos/carrito');
const ReportP = require('../modelos/reportes/pedidos');
const mensaje = require('../modelos/reportes/mensajes');


pedidoCtrl.renderPendientesForm = async (req, res) => {
    const estado = "pendiente";
    const pedidos = await carrito.find({estado}).lean();
    res.render('ventas/pendiente/pendientes',{pedidos});
};

pedidoCtrl.renderTransitoForm = async (req, res) => {
    const estado = "transito";
    const pedidos = await carrito.find({estado}).lean();
    res.render('ventas/transito/transito',{pedidos});
};

pedidoCtrl.renderCompletadosForm = async (req, res) => {
    const estado = 'completo';
    const pedidos = await carrito.find({estado}).lean();
    res.render('ventas/completado/completados',{pedidos});
};

pedidoCtrl.renderPedidoForm = async (req, res) => {
    res.render('ventas/pendiente/detallepedidos');
};


pedidoCtrl.obtenerPedidoxId = async (req, res) => {
    const pedido = await carrito.findById(req.params.id).lean();
    res.render('ventas/pendiente/detallecompra',{pedido});

};
pedidoCtrl.modificarPedido = async (req, res) => {
    const {npedido,cliente,direccion,mentrega,ruc,telefono,fpago,email,fcreacion,subtotal1,descuentos,subtotal2,iva,total,estado,anterior} = req.body;
    await carrito.findByIdAndUpdate(req.params.id,{npedido,cliente,direccion,mentrega,ruc,telefono,fpago,email,fcreacion,subtotal1,descuentos,subtotal2,iva,total,estado} );

    entradaDatos(fcreacion,estado,anterior);
    
    req.flash('success_msg','Pedido modificado correctamente');
    res.redirect('/ventas');
};

pedidoCtrl.createPedido = async (req, res) => {
    
    const {npedido,cliente,direccion,mentrega,ruc,telefono,fpago,email,fcreacion,subtotal1,descuentos,subtotal2,iva,total,estado,anterior} = req.body;
    const pedido = new carrito();

    pedido.cliente = cliente;
    pedido.direccion = direccion;
    pedido.mentrega = mentrega;
    pedido.ruc = ruc;
    pedido.telefono = telefono;
    pedido.fpago = fpago;
    pedido.email = email;
    pedido.fcreacion= fcreacion;
    pedido.npedido = npedido;
    pedido.subtotal1 = subtotal1;
    pedido.descuentos = descuentos;
    pedido.subtotal2 = subtotal2;
    pedido.iva = iva;
    pedido.total = total;
    pedido.estado = estado;

    await pedido.save();

    entradaDatos(fcreacion,estado,anterior);

    req.flash('success_msg','Pedido agregado correctamente');
    res.redirect('/pendientes/all');
};


pedidoCtrl.renderMensajeForm = (req, res) => {
    res.render('ventas/mensajes/mensajes');
};

pedidoCtrl.createMensaje = async (req, res) => {
    const {envia,img,texto} = req.body;
    const data = new mensaje();
    
    data.fecha = getfecha();
    data.hora = gethora();
    data.envia = envia;
    data.img = img;
    data. texto = texto;
    
    await data.save();
    req.flash('success_msg','mensaje agregado correctamente');
    res.redirect('/mensajes');
};

function gethora(){
    var fecha = new Date(); //Fecha actual
    var hor = fecha.getHours(); //obteniendo mes
    var min = fecha.getMinutes(); //obteniendo dia
    var seg = fecha.getSeconds(); //obteniendo año
    if(hor<10)
        hor='0'+hor; //agrega cero si el menor de 10
    if(min<10)
        min='0'+min;
    if(seg<10)
        seg='0'+seg;

    return (hor+"-"+min+"-"+seg);
}

function getfecha(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
       dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
       mes='0'+mes ;
    return (ano+"-"+mes+"-"+dia);
}




async function entradaDatos(fcreacion,estado,anterior){

    const data = await ReportP.findOne({fecha: fcreacion});
    if(data==null){
        const data1 = new ReportP();
        data1.fecha = fcreacion;
        if(estado =='pendiente'){
            if(anterior == 'nuevo'){
                data1.pendientes= (data1.pendientes)+1;
            }
        }
        await data1.save();
    }else{
        if(estado =='pendiente'){
            if(anterior == 'nuevo'){
                data1.pendientes= data1.pendientes + 1;
            }
        }
        if(estado =='transito'){
            data.pendientes = data.pendientes - 1; 
            data.transito = data.transito + 1;
        }
        if(estado=='completo'){
            data.transito = data.transito - 1;
            data.completo = data.completo + 1;
            
        }
        await ReportP.findByIdAndUpdate(data._id,data);
    }

}
 

module.exports = pedidoCtrl;