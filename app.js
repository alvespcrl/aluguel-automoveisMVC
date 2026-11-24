require('dotenv').config();
const mongoose = require('mongoose');
const clienteRoutes = require('./routes/clienteRoutes');
const automovelRoutes = require('./routes/automovelRoutes');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('/clientes', clienteRoutes);
app.use('/automoveis', automovelRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Mongo conectado'))
    .catch(err => console.log('Erro:', err.message));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});