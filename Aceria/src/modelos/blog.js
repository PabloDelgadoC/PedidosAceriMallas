const {Schema, model} = require('mongoose');

 const blogSchema = new Schema({
    
    titulo: String,
    contenido: String,
    descripcion: String,
    date: String,
    likes: Number,
    comentarios: Number,
    compartidos: Number,
    img: String
});

module.exports = model('Blog',blogSchema);