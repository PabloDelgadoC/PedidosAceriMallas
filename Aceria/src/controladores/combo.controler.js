const comboCtrl = {}

const combo = require('../modelos/combos');


comboCtrl.renderCombosForm = async (req, res) => {
    const combos = await combo.find().lean();
    res.render('app/combos/combos',{combos});

};
comboCtrl.renderComboForm = (req, res) => {
    res.render('app/combos/combo');
};

comboCtrl.createCombo = async (req, res) => {

    const {nombre,descripcion, detalle, precio,img} = req.body;
    const combo1 = new combo();
    combo1.nombre = nombre;
    combo1.descripcion = descripcion;
    combo1.detalle = detalle;
    combo1.precio = precio;
    combo1.img = img;
    
    await combo1.save();

    req.flash('success_msg','Combo creado correctamente');
    res.redirect('/combos/all');

};

comboCtrl.obtenerComboxId = async (req, res) => {
    const combo1 = await combo.findById(req.params.id).lean();
    res.render('app/combos/combo2',{combo1});
};

comboCtrl.modificarCombo = async (req, res) => {
    const {nombre,descripcion, detalle, precio,img} = req.body;
    await combo.findByIdAndUpdate(req.params.id,{nombre,descripcion,detalle, precio,img} );

    req.flash('success_msg','Combo modificado correctamente');
    res.redirect('/combos/all');


};

comboCtrl.eliminarCombo = async (req, res) => {
    await combo.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Combo eliminado correctamente');
    res.redirect('/combos/all');
};


module.exports = comboCtrl;



