const adminCtrl = {};
const admin = require('../modelos/usuario');

adminCtrl.renderAdministradoresForm = async (req, res) => {
    const administradores = await admin.find().lean();
    res.render('app/admins/administradores',{administradores});
};

adminCtrl.renderAdministradorForm = (req, res) => {
    res.render('app/admins/administrador');
};

adminCtrl.createAdministrador = async (req, res) => {
    const errors = [];
    const {nombre,apellido,email,password,confirm_password} = req.body;

    if(password.length < 5){
        errors.push({text: 'Las contrasenas tiene pocos caracteres'});
    }

    if(password!=confirm_password){
        errors.push({text: 'Las contrasenas no coinciden'});
    }

    const users = await admin.findOne({email:email});
    if(users){
        errors.push({text: 'Correo ya existe'});
    }
    
    if(errors.length > 0 ){
        res.render('signin',{errors});
    }else{

        let cuenta = `${nombre[0]}`+`${apellido}`;
        const new_admin = new admin();
        new_admin.nombre = nombre;
        new_admin.apellido = apellido;
        new_admin.email = email;
        new_admin.contrasena = password;
        new_admin.cuenta = cuenta;
        new_admin.db='';
        new_admin.creacion = '';
        new_admin.supervision = '';
        new_admin.img="";
        //new_admin.contrasena = new_admin.encriptarPass(password);
        console.log('antes del save');
        await new_admin.save();
        console.log('despue del save');
        res.redirect('/login');
    }

};

adminCtrl.createAdministrador2 = async (req, res) => {
    const {nombre,apellido,email,cuenta,contrasena,img,sb,creacion,supervision} = req.body;

    const new_admin = new admin();
    new_admin.nombre = nombre;
    new_admin.apellido = apellido;
    new_admin.email = email;
    new_admin.contrasena = contrasena;
    new_admin.cuenta = cuenta;
    if(sb!=null){
        new_admin.db=sb;
    }
    if(creacion!=null){
        new_admin.creacion = creacion;
    }
    if(supervision!=null){
        new_admin.supervision = supervision;
    }
   
    new_admin.img=img;

    await new_admin.save();
 
    req.flash('success_msg','Administrador creado correctamente');
    res.redirect('/administradores/all');
};


adminCtrl.obtenerAdminxCuenta = async (req, res) => {
    const administrador = await admin.findById(req.params.id).lean();
    res.render('app/admins/administrador2',{administrador});
};

adminCtrl.modificarAdmin = async (req, res) => {
    const administrador =  req.body;
    await admin.findByIdAndUpdate(req.params.id, administrador);

    req.flash('success_msg','Administrador modificado correctamente');
    res.redirect('/administradores/all');
};

adminCtrl.eliminarAdmin = async (req, res) => {

    await admin.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Administrador eliminado correctamente');
    res.redirect('/administradores/all');
};


module.exports = adminCtrl;