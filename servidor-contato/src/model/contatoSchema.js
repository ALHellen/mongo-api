const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true);

const ContatoSchemma = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    celular: {
        type: String,
        required: true,
        unique: true
    },
    fotoPerfil: {
        type: String
    },
    dataNascimento: {
        type: Date,
        required: true
    }
})

const ContatosCollection = mongoose.model('contato', ContatoSchemma)
module.exports = ContatosCollection