const {Schema, model} = require('mongoose');

const MensajesCtrl = new Schema({
    fecha: String,
    hora: String,
    envia: String,
    img: String,
    texto: String
});

module.exports = model('Mensajes',MensajesCtrl);

