const express = require('express');
const router = express.Router();
const automovelController = require('../controllers/automovelController');

router.get('/', automovelController.listar);

router.get('/novo', automovelController.formNovo);

router.get('/:id/editar', automovelController.formEditar);

router.post('/:id/editar', automovelController.atualizar);

router.post('/', automovelController.criar);

router.post('/:id/excluir', automovelController.excluir);


module.exports = router;