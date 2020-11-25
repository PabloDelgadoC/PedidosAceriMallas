const {Schema, model} = require('mongoose');

 const DescuentoSchema = new Schema({
    codigo:     { type: String, required: true},
    idcliente:  { type: String, required: true},
    namecliente: { type: String, required: true},
    mensaje:    String,
    estado:     String,
    finicio:    Date,
    ffin:       Date,
    fuso:       Date,
});



module.exports = model('Descuento',DescuentoSchema);