const {Schema, model} = require('mongoose');

 const CalificacionSchema = new Schema({
    servicio:     { type: String, required: true},
    usuario:   { type: String, required: true},
    calificacion:   { type: String, required: true}
    
});


module.exports = model('Calificacion',CalificacionSchema);