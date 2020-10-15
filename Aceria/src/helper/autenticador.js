const helpers = {};

helpers.esAutenticado = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/login');

};

module.exports = helpers;

