const {Schema, model} = require('mongoose');

 const pagosSchema = new Schema({
    pedidoid: { type: String, required: true },
    npedido:  { type: Number, required: true },
    pagoid:   { type: String, required: true },
    monto:  Number
});



module.exports = model('Pagos',pagosSchema);