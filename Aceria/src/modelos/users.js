const {Schema, model} = require('mongoose');

const UsuarioSchema = new Schema({

    img: String,
    cuenta: String,
    contrasena: {
        type: String,
        required: true
    },
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: String,
    email: {
        type: String,
        required: true
    },
    categoria: String,
    estado: String
});

module.exports = model('Usuarios',UsuarioSchema);