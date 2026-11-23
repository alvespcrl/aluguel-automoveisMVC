const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    rg: { type: String, required: true },
    endereco: { type: String, required: true },
    profissao: { type: String, required: true }
});

module.exports = mongoose.model('Cliente', clienteSchema);