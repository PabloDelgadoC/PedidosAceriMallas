const {Schema, model} = require('mongoose');

 const CuponesSchema = new Schema({
    codigo : { type: String, required: true},
    canjeado:     { type: Boolean, required: true},
    porcentaje:   { type: Number, required: true}
});


module.exports = model('Cupones',CuponesSchema);