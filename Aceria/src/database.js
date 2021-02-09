const mongoose = require('mongoose');

const {HOST, DATABASE} = process.env;

const URI = `mongodb+srv://userMongo:software2021@cluster0.hc1lx.mongodb.net/dbMongo?retryWrites=true&w=majority`; 

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(db => console.log('Base de datos esta conectado'))
.catch(err => console.log(err));