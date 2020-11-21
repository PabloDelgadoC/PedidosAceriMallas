const helpers = {};

helpers.Autenticado = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg','Usuario no Autorizado, debes logear primero para ver esta pagina!');
    res.redirect('/login');
};

module.exports = helpers;
