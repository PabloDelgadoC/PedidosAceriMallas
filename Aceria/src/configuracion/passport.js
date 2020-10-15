const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Admin = require('../modelos/usuario');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, contrasena, done) => {

    //revisa si son correctas
    const user = await Admin.findOne({email})
    if(!user){
        return done(null, false, {message: 'Usuario No existe'});
    }else{

        //revisa si existe la contrasena
         if(user.contrasena == contrasena){
            return done(null,user);
        }else{
            return done(null,false,{message: 'Contrasena Incorrecta'});
        }
      
    }

}));

passport.serializeUser((user, done) => {
    done (null, user.id);
});

passport.deserializeUser((id,done) => {
    Admin.findById(id,(err,user) => {
        done(err,user);
    });
});