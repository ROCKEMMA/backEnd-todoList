// Dependencias
require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes/routes');
app.use('/',routes);
app.use(express.json());


// Configuración de puertos
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})

