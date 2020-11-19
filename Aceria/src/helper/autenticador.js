const { Token } = require("./token");

const helpers = {};

helpers.esAutenticado = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/login');
};

helpers.verifyToken = (req, res, next) => {
    const userToken = req.get('x-token') || ''; //to get any header

    Token.checkToken( userToken )
        .then( decoded => {
            console.log(decoded);
            req.user = decoded.user;
            next();
        }).catch( err => {
            res.status(404).send({
                ERROR: err,
                MESSAGE: 'TOKEN NO ES CORRECTO'
            });
        });
};

module.exports = helpers;

