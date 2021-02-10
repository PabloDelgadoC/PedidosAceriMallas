const {Schema, model} = require('mongoose');

 const VentasSchema = new Schema({
    producto:  { type: String, required: true},
    categoria:     { type: String, required: true},
    cantidad:     { type: String, required: true},
    total:     { type: String, required: true},
    fecha:     { type: String, required: true}
    
});


module.exports = model('Ventas',VentasSchema);