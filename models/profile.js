const mongoose = require("mongoose");

const userAth = new mongoose.Schema({
    _id: mongoose.isValidObjectId,
    name: String
});

const profile = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório !']
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