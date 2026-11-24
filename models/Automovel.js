const mongoose = require('mongoose');

const automovelSchema = new mongoose.Schema({

    marca: {type: String, required: true },
    modelo: { type: String, required: true},
    ano: { type: Number, min: 1900, max: 2027, required: true},
    placa: { type: String, unique: true, required: true},
    matricula: { type: String, required: true},
    proprietarioTipo: {type: String, enum: ['cliente', 'empresa', 'banco'], required: true},
    proprietarioNome: {type: String, required: true}
})

module.exports = mongoose.model('Automovel', automovelSchema);