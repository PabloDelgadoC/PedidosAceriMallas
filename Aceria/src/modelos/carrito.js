const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarritoSchema = new Schema({

    cliente: { type: String, required: true},
    direccion: String,
    mentrega: String,
    ruc: String,
    telefono: String,
    fpago: String,
    email: String,
    fcreacion: String,
    npedido: Number,
    subtotal1: Number,
    descuentos: Number,
    subtotal2: Number,
    iva: Number,
    total: Number,
    estado: String
});

module.exports = mongoose.model('Carrito',CarritoSchema);
