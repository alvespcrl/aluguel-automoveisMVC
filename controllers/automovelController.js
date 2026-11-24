const Automovel = require('../models/Automovel');

exports.listar = async (req, res) => {
    try {
        const automoveis = await Automovel.find();
        res.render('automoveis/index', { automoveis });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.criar = async (req, res) => {
    try {
        const automovel = await Automovel.create(req.body);
        res.redirect('/automoveis')
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const automovel = await Automovel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!automovel) {
            return res.status(404).json({ erro: "Automovel nao encontrado" })
        }
        res.redirect('/automoveis');
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.excluir = async (req, res) => {
    try {
        const automovel = await Automovel.findByIdAndDelete(req.params.id);
        if (!automovel) {
            return res.status(404).json({ erro: "Automovel nao encontrado" })
        }
        res.redirect('/automoveis');
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


exports.formNovo = (req, res) => {
    res.render('automoveis/novo');
}

exports.formEditar = async (req, res) => {
    try {
        const automovel = await Automovel.findById(req.params.id);
        if (!automovel) {
            return res.status(404).json({ erro: "Automovel nao encontrado" })
        }
        res.render('automoveis/editar', { automovel });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}