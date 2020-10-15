const {Router} = require('express');
const router = Router();


const { 
    renderLognInForm,
    sigIn,
    logOut
} =require('../controladores/sesion.controler');

const { esAutenticado } = require('../helper/autenticador');


// logins
router.get('/',(req,res) => {
    res.render('signin');
});

//pantallazos
router.get('/login',renderLognInForm);

//para logoar
router.post('/login', sigIn);

//para delogear
router.get('/logOut',esAutenticado, logOut);


module.exports = router;