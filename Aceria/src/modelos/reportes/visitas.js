const {Schema, model} = require('mongoose');

const ReportVisitantes = new Schema({
    fecha: String,
    visitantes: {type: Number, default: 0},
    likes: {type: Number, default: 0},
    comentarios: {type: Number, default: 0},
    compartidos: {type: Number, default: 0},
});

module.exports = model('ReportVisitantes',ReportVisitantes);