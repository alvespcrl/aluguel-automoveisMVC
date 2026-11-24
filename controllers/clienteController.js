const { trusted } = require('mongoose');
const Cliente = require('../models/Cliente');

exports.listar = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.render('clientes/index', {clientes});
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.criar = async (req, res) => {
    try {
        const clientes = await Cliente.create(req.body);
        res.redirect('/clientes');
    } catch (err) {
        res.json(400).json({ erro: err.message });
    }
};

exports.buscar = async (req, res) => {
    try {
        const clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            return res.json(404).json({ erro: "Cliente nao encontrado" })
        }
        res.json(clientes);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!clientes) {
            return  res.json(404).json({ erro: "Cliente nao encontrado" })
        }
        res.json(clientes);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.excluir = async (req, res) => {
    try {
        const clientes = await Cliente.findByIdAndDelete(req.params.id);
        if (!clientes) {
             return res.json(404).json({ erro: "Cliente nao encontrado" })
        }
        res.json(clientes);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.formNovo = (req, res) => {
    res.render('clientes/novo');
};

