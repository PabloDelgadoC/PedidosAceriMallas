const PromoCtrl = {};

const descuentos=require('../modelos/descuentos');

/*

ProductCtrl.createProduct = async (req,res) => {
    const errors = [];
  
    const { categoria,codigo,nombre,ancho,alto,grosor,diametro,separa,descripcion,precio,img} = req.body;

    if(codigo.length < 6){
        errors.push({text: 'Codigo es muy corto, debe de tener minimo 6 caracteres'});
    }

    if(precio <= 0){
        errors.push({text: 'Precio no puede ser negativo o igual a 0'});     
    }

    if(errors.length >0){
        res.render('app/productos/producto', {errors});
    }else{
        const producto = await product.findOne({codigo: codigo}).lean();
        if(producto){
            req.flash('error_msg','El codigo de producto ya existe, debe Registrar desde el principio');
            res.redirect('/producto');

        }else {
            const new_product=new product();

            new_product.categoria = categoria;
            new_product.codigo = codigo;
            new_product.nombre = nombre;

            new_product.ancho = null;
            new_product.alto = null;
            new_product.grosor = null;
            new_product.diametro = null;
            new_product.separa = null;

            new_product.descripcion = descripcion;
            new_product.precio = precio;
            new_product.img = img;
           
            if(ancho!=null){
                new_product.ancho = ancho;
            }
            if(alto!=null){
                new_product.alto = alto;
            }
            if(grosor!=null){
                new_product.grosor = grosor;
            }
            if(diametro!=null){
                new_product.diametro = diametro;
            }
            if(separa!=null){
                new_product.separa = separa;
            }

            await new_product.save();
            req.flash('success_msg','Producto creado correctamente');
            res.redirect('/producto/all');
            
        }
    }
};

*/

PromoCtrl.renderPromosForm = async (req,res) => {
    const desc = await descuentos.find().lean();
    res.render('app/promociones/descuentos',{desc});
};

PromoCtrl.renderPromotForm = (req,res) => {
    res.render('app/promociones/descuento');
};

PromoCtrl.createPromo = async (req,res) => {
};

PromoCtrl.findPromo = async (req,res) => {
    const {buscadorBox} = req.body;

    const desc = await descuentos.find({namecliente: buscadorBox}).lean();
    res.render('app/promociones/descuentos',{desc});
};

PromoCtrl.rendereditPromo = async (req,res) => {
    const desc = await descuentos.findById(req.params.id).lean();
    res.render('app/promociones/descuento2',{desc});

};

PromoCtrl.editPromo = async (req,res) => {
    const promocion = req.body;

    await descuentos.findByIdAndUpdate(req.params.id, promocion);
    req.flash('success_updated','Promocion actualizado');
    res.redirect('/promocion/all');
};

PromoCtrl.eliminarPromo = async (req,res) => {
    await descuentos.findByIdAndDelete(req.params.id);
    req.flash('success_deleted','Promocion eliminado');
    res.redirect('/promocion/all');
};

module.exports = PromoCtrl;