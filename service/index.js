const mongoose = require("mongoose");
const dotenv = require("dotenv");

//#region | Configurando ambiente 
let dotenv = 'env';

if (process.env.NODE_ENV) {
    dotenv += `.${process.env.NODE_ENV}`;

}

dotenv, dotenv.config({ path: `./config/${dotenv}` });
////#endregion

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.flqrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('MongoDb Connection Succeeded.');
    } else {
        console.log('Error in DB connection' + err)
    }
});

const services = {};
services.usersService = require('./userServices');
services.profilesService = require('./profilesServices');

module.exports = services;