const indexCtrl = {}

const visitas = require('../modelos/reportes/visitas');
const pedidos = require('../modelos/reportes/pedidos');
const mensajes = require('../modelos/reportes/mensajes');


indexCtrl.renderDash = async (req,res) => {

   var asd=getfecha();
   const RP = await visitas.findOne({fecha: asd}).lean();
   const mensajeria = await mensajes.find({fecha: asd}).lean();
   res.render('dashboard/dash',{RP,mensajeria}); 
};

indexCtrl.renderReports = async (req,res) => {
   var asd=getfecha();
   const RP = await pedidos.findOne({fecha: asd}).lean();
   res.render('reports/reporte', {RP} ); 
};

indexCtrl.renderApp = (req,res) => {
    res.render('app/menu_app'); 
};

indexCtrl.renderVentas = (req,res) => {
    res.render('ventas/menu_sales'); 
};

function getfecha(){
   var fecha = new Date(); //Fecha actual
   var mes = fecha.getMonth()+1; //obteniendo mes
   var dia = fecha.getDate(); //obteniendo dia
   var ano = fecha.getFullYear(); //obteniendo año
   if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
   if(mes<10)
      mes='0'+mes ;
   return (ano+"-"+mes+"-"+dia);
}

async function entradaDatos(){

   const data1 = new visitas();
   data1.fecha = getfecha();
   data1.visitantes = 100;
   data1.likes = 90;
   data1.comentarios = 20;
   data1.compartidos = 2;
   
   await data1.save();
}


module.exports = indexCtrl;
