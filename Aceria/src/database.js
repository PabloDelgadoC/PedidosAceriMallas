const mongoose = require('mongoose');

const URI = process.env.URI;
const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;

const MONGODB_URI = `${URI}://${HOST}:27017/${DATABASE}`;

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI,{

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

})
.then(db => console.log('Database esta conectado'))
.catch(err => console.log(err));