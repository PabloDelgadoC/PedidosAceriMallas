const mongoose = require('mongoose');

const URI = process.env.URI;
const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;

const MONGODB_URI = `${URI}://${HOST}/${DATABASE}`;

mongoose.connect(MONGODB_URI,{

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

})
.then(db => console.log('Database esta conectado'))
.catch(err => console.log(err));