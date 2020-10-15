const {Schema, model} = require('mongoose');

const ReportPedidos = new Schema({
    fecha: String,
    pendientes: {type: Number, default: 0},
    transito: {type: Number, default: 0},
    completo: {type: Number, default: 0}
});

module.exports = model('ReportPedidos',ReportPedidos);