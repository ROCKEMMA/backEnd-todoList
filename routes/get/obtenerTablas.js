const db = require('../../config/database');
const express = require('express');
const router = express.Router();

router.get('/tablas', async(req,res)=>{
    try {
        const [tablas] = await db.query('SHOW TABLES');
        console.log(tablas);
        res.json(tablas);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;