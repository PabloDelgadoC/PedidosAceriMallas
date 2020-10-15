const BlogtCtrl = {}

const blog = require('../modelos/blog');


BlogtCtrl.renderPublicaciones1Form = async (req, res) => {
    const blogs = await blog.find().lean();
    res.render('app/publicaciones/publicaciones1',{blogs});
};

BlogtCtrl.renderPublicaciones2Form = async (req, res) => {
    const blogs = await blog.find().lean();
    res.render('app/publicaciones/publicaciones2',{blogs});

};

BlogtCtrl.renderPublicacionForm = (req, res) => {
    res.render('app/publicaciones/publicacion');
};

BlogtCtrl.createPublicacion = async (req, res) => {
    const {titulo,descripcion,contenido,likes,comentarios,compartidos,date,img} = req.body;
    const new_blog = new blog();
    new_blog.titulo = titulo;
    new_blog.contenido = contenido;
    new_blog.descripcion = descripcion;
    new_blog.date = date;
    new_blog.likes = likes;
    new_blog.comentarios = comentarios;
    new_blog.compartidos = compartidos;
    new_blog.img = img;
  
    await new_blog.save();

    req.flash('success_msg','Publicacion creado correctamente');
    res.redirect('/publicaciones/all');

};

BlogtCtrl.obtenerPublicacionxID = async (req, res) => {
    const blogs = await blog.findById(req.params.id).lean();
    res.render('app/publicaciones/publicacion2',{blogs});
};

BlogtCtrl.modificarPublicacion = async (req, res) => {
    const {titulo,descripcion,contenido,likes,comentarios,compartidos,date,img} = req.body;
    await blog.findByIdAndUpdate(req.params.id, {titulo,descripcion,contenido,likes,comentarios,compartidos,date,img} );

    req.flash('success_msg','Publicacion modificada correctamente');
    res.redirect('/publicaciones/all');

};

BlogtCtrl.eliminarPublicacion = async (req, res) => {
    await blog.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Publicacion eliminada correctamente');
    res.redirect('/publicaciones/all');
};

module.exports = BlogtCtrl;