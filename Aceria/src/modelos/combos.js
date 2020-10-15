const {Schema, model} = require('mongoose');


const comboSchema = new Schema({
    nombre: String,
    descripcion: String,
    detalle: String,
    precio: Number,
    img: String
});



module.exports = model('Combo',comboSchema);