const UserCtrl = {};

const user=require('../modelos/usuarios');


UserCtrl.renderUsersForm = async (req,res) => {
    const usuarios = await user.find().lean();
    res.render('app/usuarios/usuarios',{usuarios});
};


UserCtrl.renderUserForm = (req,res) => {
    res.render('app/usuarios/usuario');
};


UserCtrl.createUser = async (req,res) => {
    const errors = [];
    const {cuenta,nombre,direccion,email,contrasena,categoria,img,estado, telefono} = req.body;

    if(nombre==null){
        errors.push({text: 'Nombre es un campo obligatorio'});
    }

    if(contrasena==null){
        errors.push({text: 'Contrasena es un campo obligatorio'});
    }

    if(cuenta.length < 6){
        errors.push({text: 'Cuenta es muy corta, debe de tener por lo menos 6 caracteres'});
    }

    if(contrasena.length < 8){
        errors.push({text: 'Contraseña es muy corta, debe de tener por lo menos 8 caracteres'});
    }
    
    if(errors.length >0){
        res.render('app/usuarios/usuario', {errors});
    }else{
        const emailUser = await user.findOne({email: email}).lean();
        if(emailUser){
            req.flash('error_msg','El correo ya esta en uso, debe Registrar desde el principio');
            res.redirect('/usuario');

        }else {
            const new_user=new user();
            new_user.cuenta = cuenta;
            new_user.nombre = nombre;
            new_user.email = email;
            new_user.contrasena = contrasena;
            new_user.direccion = direccion;
            new_user.telefono = telefono;
            new_user.img = img;
            new_user.categoria = categoria
            new_user.estado = null;

            if(estado=='activo'){
                new_user.estado = estado;
            }

            await new_user.save();
            req.flash('success_msg','Operador creado correctamente');
            res.redirect('/usuario/all');
            
        }
    }
};


UserCtrl.findUser = async (req,res) => {
    const {categoria, buscadorBox} = req.body;

    const usuarios = await user.find({categoria: categoria, nombre:buscadorBox }).lean();
    res.render('app/usuarios/usuarios',{usuarios});
};


UserCtrl.rendereditUser = async (req,res) => {
    const usuario = await user.findById(req.params.id).lean();
    res.render('app/usuarios/usuario2',{usuario});

};


UserCtrl.editUser = async (req,res) => {
    const usuario = req.body;
    if(usuario.estado!='activo'){
        usuario.estado=null;
    }
    await user.findByIdAndUpdate(req.params.id, usuario );
    req.flash('success_updated','Usuario actualizado');
    res.redirect('/usuario/all');

};


UserCtrl.eliminarUser = async (req,res) => {
    await user.findByIdAndDelete(req.params.id);
    req.flash('success_deleted','Usuario eliminado');
    res.redirect('/usuario/all');
};


module.exports = UserCtrl;



