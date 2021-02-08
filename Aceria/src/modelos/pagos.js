const {Schema, model} = require('mongoose');

 const pagosSchema = new Schema({
    npedido: { type: Number, required: true },
    usuario: { type: String, required: true }, 
    monto:  Number
});



module.exports = model('Pagos',pagosSchema);