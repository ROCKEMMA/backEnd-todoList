const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/tareas',async (req,res)=>{
    try {
        const usuario_id = req.query.id;;
        const [todasLasTareas] = await db.query(
            'SELECT * FROM tareas WHERE usuario_id = ?',
            [usuario_id]
        );
        res.json(todasLasTareas);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;