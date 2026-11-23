const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscar);
router.put('/:id', clienteController.atualizar);
router.post('/', clienteController. criar);
router.delete('/:id', clienteController. excluir);



module.exports = router;