const db = require('../../config/database');
const express = require('express');
const router = express.Router();

router.get('/tareas', async (req, res) => {
    try {
        let [todasLasTareas] = await db.query(`
      SELECT 
        id,
        nombre,
        descripcion,
        estado_tarea,
        DATE_FORMAT(fecha_asignada, '%Y-%m-%d') AS fecha_asignada,
        DATE_FORMAT(fecha_entrega, '%Y-%m-%d') AS fecha_entrega,
        estado_artivado,
        usuario_id
      FROM tareas
    `);

        res.json(todasLasTareas);
    } catch (error) {
        console.error("error: ", error);
        res.status(500).json({ error: "Error al obtener tareas" });
    }
});

module.exports = router;