const mongoose = require("mongoose"); // importar biblioteca para usar ela 

const userAuth = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

const profile = new mongoose.Schema({ //criação de perfil para usuario objeto representa profile

    _id: mongoose.ObjectId, // informado pelo id     
    name: String // o tipo string 
});

//Model class objeto usuario


const user = new mongoose.Schema({ // configurando metodo para criar objeto que representa nossa collection na base
    // objeto em formato json é um array

    name: { //cada propiedade da nossa base 

        type: String, //tipo de dado que será armazenado
        required: [true, 'O nome é obrigatório !']
    },
    lastname: {
        type: String,
        required: [true, 'O sobrenome é obrigatório !']
    },
    email: String,
    password: String,
    profile: profile,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    userCreate: {
        type: userAuth,

    },
    userUpdate: {
        type: userAuth
    },
    userDelete: {
        type: userAuth
    },


}, { collection: 'users' }); // indicando a collection que ele representa 

module.exports = mongoose.model('users', user); // exportando classe para usar informações dentro da aplicação