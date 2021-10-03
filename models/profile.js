const mongoose = require("mongoose");

const userAuth = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String
});

const profile = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O Profile é obrigatório !']
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
}, { collection: 'profiles' });

module.exports = mongoose.model('profiles', profile);