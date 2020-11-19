const productCtrl = {}

const product = require('../modelos/producto');

productCtrl.renderProductsForm = async (req, res) => {
    const productos = await product.find().lean();
    res.render('app/productos/productos',{productos});
};

productCtrl.RenderProductForm = (req, res) => {
    res.render('app/productos/producto');
};

productCtrl.createNewProduct = async (req, res) => {

    const {codigo,nombre,precio,unidades,descripcion,stock,categoria,img} = req.body;
    const new_product = new product();
    new_product.codigo = codigo;
    new_product.nombre = nombre;
    new_product.precio = precio;
    new_product.unidades = unidades;
    new_product.descripcion = descripcion;
    new_product.stock = stock;
    new_product.categoria = categoria;
    new_product.img = req.file.filename;
    
 
    await new_product.save();

    req.flash('success_msg','Producto creado correctamente');
    res.redirect('/productos/all');
   
};

productCtrl.obtenerProductxId = async (req, res) => {
    const productos = await product.findById(req.params.id).lean();
    res.render('app/productos/producto2',{productos});
};

productCtrl.modificarProductoxId = async (req, res) => {

    const {codigo,nombre,precio,unidades,descripcion,stock,categoria,img} =  req.body;
    await product.findByIdAndUpdate(req.params.id, {codigo,nombre,precio,unidades,descripcion,stock,categoria,img} );

    req.flash('success_msg','Producto modificado correctamente');
    res.redirect('/productos/all');
};

productCtrl.eliminarProducto = async (req, res) => {
    await product.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Producto eliminado correctamente');
    res.redirect('/productos/all');
};

productCtrl.getProducts = async (req, res) => {
    const products = await product.find();
    return res.status(200).send({
        STATUS: 'OK',
        MESSAGE: 'Show products',
        PRODUCTS: products
    });
};

module.exports = productCtrl;