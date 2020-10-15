const {Schema, model} = require('mongoose');

 const ProductSchema = new Schema({
    codigo:{
        type: String,
        required: true
    },
    img: String,
    nombre: String,
    precio: Number,
    categoria: String,
    unidades: String,
    descripcion: String,
    stock: Number
});

module.exports = model('Producto',ProductSchema);


