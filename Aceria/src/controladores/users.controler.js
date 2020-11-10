const usersCtrl = {}

const user = require('../modelos/users');
const nodemailer = require('nodemailer');
const  jwt  =  require('jsonwebtoken');

const SECRET_KEY = "secretkey";

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

//USERS MOVIL
usersCtrl.createUserMovil = async (req, res) => {
    const {nombre,apellido,telefono,contrasena,direccion,email} = req.body;
    const new_user = new user();
    new_user.nombre = nombre;
    new_user.apellido = apellido;
    new_user.cuenta = nombre + ' ' + apellido;
    new_user.telefono = telefono;
    new_user.contrasena = contrasena;
    new_user.direccion = direccion;
    new_user.email = email;
    new_user.categoria = 'Persona Natural';
    new_user.estado = 'activo';
    new_user.img = '';
    console.log(new_user);

    await new_user.save( (error, user) => {
        if(error) return res.status(500).send({
            ERROR: error,
            MESSAGE: 'ERROR TO SAVE USER',
        });

        if(!user) return res.status(404).send({
            MESSAGE: 'DO NOT SAVE THE USER',
        });

        const  expiresIn  =  24  *  60  *  60;
        const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
            expiresIn:  expiresIn
        });

        return res.status(200).send({
            STATUS: 'OK',
            MESSAGE: 'Usuario creado exitosamente',
            USER: user,
            TOKEN: accessToken,
            EXPIRE: expiresIn
        });
    });
    
};

usersCtrl.forgotPassword = async (req, res) => {
    const email = req.body.email;
    
    await user.findOne({email: email}).exec( async (error, user) => {
        if(error) return res.status(500).send({
            ERROR: error,
            MESSAGE: 'ERROR TO UPDATE USER',
        });

        if(!user) return res.status(404).send({
            MESSAGE: 'DO NOT UPDATE THE USER',
        });

        let random = parseInt(Math.random()*1000);
        user.contrasena = user.nombre.slice(2) + random.toString() + user.apellido.slice(2);

        await user.save((error, user) => {
            if(error) return res.status(500).send({
                ERROR: error,
                MESSAGE: 'ERROR TO SAVE USER',
            });
    
            if(!user) return res.status(404).send({
                MESSAGE: 'DO NOT SAVE THE USER',
            });
        });

        const output = `
            <h2>Ha solicitado cambio de contraseña</h2>
            <p>Por el cual su nueva contraseña es:</p>
            <ul>  
                <li>Email: ${email}</li>
                <li>Contraseña: ${user.contrasena}
            </ul>
            <h4>Recuerde no compartir con nadie su contraseña</h4>
            <h5>Puede cambiar su contraseña en su perfil después de iniciar sesión</h5>
        `;
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'dawap2020@gmail.com', // generated ethereal user
                pass: 'allan123AP'  // generated ethereal password
            },
            tls:{
            rejectUnauthorized:false
            }
        });
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Acerimallas" <dawap2020@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Recuperacion de Contraseña', // Subject line
            text: 'Contactáme', // plain text body
            html: output // html body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.send(output);
        });

        return res.status(200).send({
            STATUS: 'OK',
            MESSAGE: 'Se ha enviado la contraseña al correo',
            USER: user
        });
    });
};

usersCtrl.logIn = async (req, res) => {
    const {email,contrasena} = req.body;
    console.log(email);
    //if(email) {
        console.log('Entro al email');
        await user.findOne({email: email}).exec( (error, user) => {
            if(error) return res.status(500).send({
                ERROR: error,
                MESSAGE: 'ERROR TO LOG IN',
            });
    
            if(!user) return res.status(404).send({
                MESSAGE: 'DO NOT LOG IN THE USER',
            });
    
            if(contrasena !== user.contrasena) {
                return res.status(200).send({
                    STATUS: 'PASSWORD',
                    MESSAGE: 'Contraseña incorrecta',
                    USER: user
                });
            }
            else {
                const  expiresIn  =  24  *  60  *  60;
                const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
                    expiresIn:  expiresIn
                });
        
                return res.status(200).send({
                    STATUS: 'OK',
                    MESSAGE: 'Inicio de sesión exitoso',
                    USER: user,
                    TOKEN: accessToken,
                    EXPIRE: expiresIn
                });
            }
        });
    /*}
    else {
        return res.status(200).send({
            STATUS: 'EMAIL',
            MESSAGE: 'El correo no está registrado'
        });
    }*/
    
}


module.exports = usersCtrl;