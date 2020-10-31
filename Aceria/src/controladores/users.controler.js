const usersCtrl = {}

const user = require('../modelos/users');

usersCtrl.renderUsuariosForms = async (req, res) => {
    const usuarios = await user.find().lean();
    res.render('app/usuarios/usuarios',{usuarios});
}; 

usersCtrl.renderUsuarioForm = (req, res) => {
    res.render('app/usuarios/usuario');
};

usersCtrl.createNewUser = async (req, res) => {

    const {nombre,apellido,cuenta,password,direccion,email,categoria,estado,img} = req.body;
    const new_usuario = new user();
    new_usuario.nombre = nombre;
    new_usuario.apellido = apellido;
    new_usuario.cuenta = cuenta;
    new_usuario.contrasena = password;
    new_usuario.direccion = direccion;
    new_usuario.telefono = 0;
    new_usuario.email = email;
    new_usuario.categoria = categoria;
    new_usuario.estado = estado;
    new_usuario.img = img;

    await new_usuario.save();

    req.flash('success_msg','Usuario creado correctamente');
    res.redirect('/usuarios/all');

};

usersCtrl.obtenerUserxId = async (req, res) => {
    const usuario = await user.findById(req.params.id).lean();
    res.render('app/usuarios/usuario2',{usuario});
};

usersCtrl.modificarUser = async (req, res) => {
    const {nombre,apellido,cuenta,contrasena,direccion,email,categoria,estado,img} =  req.body;
    await user.findByIdAndUpdate(req.params.id,  {nombre,apellido,cuenta,contrasena,direccion,email,categoria,estado,img}  );
    req.flash('success_msg','Usuario modificado correctamente');
    res.redirect('/usuarios/all');

};

usersCtrl.eliminarUser = async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Usuario eliminado correctamente');
    res.redirect('/usuarios/all');
};



module.exports = usersCtrl;