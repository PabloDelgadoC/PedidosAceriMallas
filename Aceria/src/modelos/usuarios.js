const {Schema, model} = require('mongoose');
const bcrip = require('bcryptjs');

const UsuarioSchema = new Schema({

    nombre:   { type: String, required: true },
    email:    { type: String, required: true },
    contrasena: { type: String, required: true },
    cuenta: String,  
    direccion: String,
    telefono: String,
    img: String,
    categoria: String,
    estado: String
});

UsuarioSchema.methods.encriptarPass = async contrasena => {
    const salt = await bcrip.genSalt(10);
    return await bcrip.hash(contrasena, salt);
};

UsuarioSchema.methods.matchPass = async function(contrasena) {
    return (await bcrip.compare(contrasena,this.contrasena));
};

module.exports = model('Usuarios',UsuarioSchema);