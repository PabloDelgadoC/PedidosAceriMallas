const ReporteCtrl = {};

//const descuentos=require('../modelos/descuentos');
const user=require('../modelos/usuarios');
const admin=require('../modelos/administrador');


ReporteCtrl.renderReportes = async (req,res) => {
    res.render('app/reportes/reportes');
};

// ReporteCtrl.fincliente = async (req,res) => {
//     const {idcliente,x,y} = req.body;

//     if(x!=null){
//         if(y!=null){
//             const usuario = await user.findOne({cuenta: idcliente}).lean();
            
//             if(usuario){
//                 res.render('app/promociones/descuento',{usuario});
//             }else{
//                 res.redirect('/descuento');
//             }
//         }
//     }
// };


// ReporteCtrl.createPromo = async (req,res) => {
//     const errors = [];
  
//     const {codigo,idcliente,namecliente,mensaje,finicio,ffin} = req.body;

//     if(codigo.length < 6){
//         errors.push({text: 'Codigo es muy corto, debe de tener minimo 6 caracteres'});
//     }

//     if(errors.length >0){
//         res.render('app/promociones/descuento',{errors});
//     }else{
        
//         const desc = await descuentos.findOne({codigo: codigo}).lean();
//         if(desc){
//             req.flash('error_msg','El codigo de Descuento ya existe, debe Registrar desde el principio');
//             res.redirect('/descuento');
//         }else {
//             const new_desc=new descuentos();
//             new_desc.idcliente      = idcliente;
//             new_desc.codigo         = codigo;
//             new_desc.namecliente    = namecliente;
//             new_desc.mensaje        = mensaje;
//             new_desc.finicio        = finicio;
//             new_desc.ffin           = ffin;
//             new_desc.estado         = 'Pendiente';
//             new_desc.fuso           = null;

//             await new_desc.save();
//             req.flash('success_msg','El codigo de Descuento ha sido creado correctamente');
//             res.redirect('/promocion/all');
            
//         }
//     }

// };

//parece que si 
// ReporteCtrl.findPromo = async (req,res) => {
//     const {buscadorBox} = req.body;

//     const desc = await descuentos.find({namecliente: buscadorBox}).lean();
//     res.render('app/promociones/descuentos',{desc});
// };



module.exports = ReporteCtrl;