const express = require('express');
const router = express.Router();
const db = require('../../config/database');

router.get('/tareas',async (req,res)=>{
    try {
        const todasLasTareas = db.query('SELECT * FROM tareas');
        res.json(todasLasTareas);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;