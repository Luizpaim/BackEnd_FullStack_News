const mongoose = require("mongoose"); //chamando biblioteca mongoose

const userAuth = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

const categorie = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A categorie é obrigatória !']
    },
    createdAt: Date,
    updatedAt: Date,
    deletd: Date,
    userCreate: {
        type: userAuth
    },
    userUpdate: {
        type: userAuth
    },
    userDelete: {
        type: userAuth
    },
}, { collection: 'categories' });

module.exports = mongoose.model('categories', categorie);