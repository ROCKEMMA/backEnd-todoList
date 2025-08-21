require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// CORS
/* app.use(cors({
    origin: ['http://localhost:5500'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
})); */
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

/* ====== RUTAS ====== */
const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);

// Alternativa con prefijo /api:
// app.use('/api', getTablas);
// app.use('/api', getTareas);

/* ====== SERVIDOR ====== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor: http://localhost:${PORT}`);
});
