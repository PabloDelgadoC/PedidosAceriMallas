const express = require('express');
const exhand = require('express-handlebars');
const path = require('path');
const method_override = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');


//inicializador
const app= express();
require('./configuracion/passport');
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});


//configruaciones
app.set('port',process.env.PORT|| 4000 );
app.set('views', path.join(__dirname,'views'));

app.engine('.hbs',exhand({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layaouts'),
    partialsDir:  path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

app.set('view engine','.hbs')

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(method_override('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(multer({
    storage,
    dest: path.join(__dirname,'public/uploads')
}).single('img'));
app.use(cors());
app.use(logger('dev'));



// variable global
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


//rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/administrador.routes'));
app.use(require('./routes/sesion.routes'));
app.use(require('./routes/producto.routes'));
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/blog.routes'));
app.use(require('./routes/combo.router'));
app.use(require('./routes/pedidos.routes'));

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));


module.exports = app;
