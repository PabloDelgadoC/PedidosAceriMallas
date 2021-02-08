const {Schema, model} = require('mongoose');

 const detallefacturaSchema = new Schema({
    npedido: { type: Number, required: true },
    productid:      String,
    productnombre:  String,
    productcant:    Number,
    productprecio:  Number,
    producttotal:   Number
});



module.exports = model('detallefactura',detallefacturaSchema);