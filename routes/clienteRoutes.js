const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.listar);

router.get('/novo', clienteController.formNovo);

router.get('/:id', clienteController.buscar);

router.get('/:id/editar', clienteController.formEditar);

router.put('/:id', clienteController.atualizar);

router.post('/:id/editar', clienteController.atualizar);

router.post('/', clienteController.criar);

router.post('/:id/excluir', clienteController.excluir);

router.delete('/:id', clienteController.excluir);



module.exports = router;