const sesionCtrl = {};
const passport = require('passport');
const admin = require('../modelos/usuario');

sesionCtrl.renderLognInForm = (req, res) => {
    res.render('login');
};

sesionCtrl.sigIn = passport.authenticate('local',{
    failureRedirect: '/login',
    successRedirect: '/dashboard',
    failureFlash: true
});

sesionCtrl.logOut = (req, res) => {
    req.logout();
    res.redirect('/login');
};


module.exports = sesionCtrl;