const express = require('express');
const exphbs  = require('express-handlebars');
const path    = require('path');
const method_override = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
//const logger = require('morgan');
const multer = require('multer');


//inicializadores
const app = express();
require('./configuracion/passport');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});



//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');




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
app.use(cors());
//app.use(logger('dev'));
app.use(multer({ storage: storage }).single('img'));




//variables globales
app.use((req, res, next) => {
    res.locals.exito = req.flash('success_msg');
    res.locals.updated = req.flash('success_updated');
    res.locals.deleted = req.flash('success_deleted');
    res.locals.errores = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.logoneado = req.user || null;
    next();
});



//rutas
app.use(require('./routes/sesiones.routes'));
app.use(require('./routes/admin.routes'));
app.use(require('./routes/operador.routes'));
app.use(require('./routes/usuarios.routes'));
app.use(require('./routes/dash.routes'));
app.use(require('./routes/producto.routes'));
app.use(require('./routes/promociones.routes'));
app.use(require('./routes/pedido.routes'));
app.use(require('./routes/pagos.routes'));
app.use(require('./routes/local.routes'));
app.use(require('./routes/publicacion.routes'));
app.use(require('./routes/reportes.router'))
app.use(require('./routes/sugerencias.routes'));
app.use(require('./routes/cupones.router'));
app.use(require('./routes/galeria.routes'));


//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));


module.exports = app;
