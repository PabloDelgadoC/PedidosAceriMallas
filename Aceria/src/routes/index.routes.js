const {Router} = require('express');
const router = Router();

const {
   renderDash,
   renderReports,
   renderApp,
   renderVentas
} = require('../controladores/index.controler');

const { esAutenticado } = require('../helper/autenticador');

//menu principal
router.get('/dashboard',esAutenticado, renderDash);

router.get('/reports',esAutenticado, renderReports);

 router.get('/app',esAutenticado, renderApp);

 router.get('/ventas',esAutenticado, renderVentas);

module.exports = router;