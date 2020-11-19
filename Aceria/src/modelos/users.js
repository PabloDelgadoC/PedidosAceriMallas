const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

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
        required: true,
        unique: true
    },
    categoria: String,
    estado: String
});

UsuarioSchema.method('comparePassword', function(pass) {
    if( bcrypt.compareSync(pass, this.contrasena)) {
        return true;
    } else {
        return false;
    }
});

module.exports = model('Usuarios',UsuarioSchema);