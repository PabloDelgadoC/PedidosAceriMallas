const {Schema, model} = require('mongoose');

 const PedidoSchema = new Schema({
    usuario: { type: String, required: true }, 
    npedido: { type: Number, required: true },
    usernombre: String,
    userruc:    String,
    userdir:    String,
    userfono:   String,
    fecha:      String,
    descuento:  Number,
    subtotal:   Number,
    iva:        Number,
    total:      Number,
    estado:     String
});



module.exports = model('Pedido',PedidoSchema);