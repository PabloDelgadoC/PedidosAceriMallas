const mongoose = require('mongoose');

const {HOST, DATABASE} = process.env;
const URI = `mongodb://${HOST}:27017/${DATABASE}`; 

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(db => console.log('Base de datos esta conectado'))
.catch(err => console.log(err));