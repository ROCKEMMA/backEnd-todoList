require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// CORS
app.use(cors({
    origin: "*", //< ---------------
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/health', (req, res) => res.status(200).json({ ok: true, ts: Date.now() }));

app.get('/db', async (req, res) => {
    try {
        const [r] = await pool.query('SELECT NOW() AS now');
        res.json({ ok: true, now: r[0].now });
    } catch (e) {
        console.error('[GET /db]', e);
        res.status(500).json({ ok: false, error: e.code || e.message });
    }
});
  

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
