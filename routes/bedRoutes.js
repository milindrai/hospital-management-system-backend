const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all beds
router.get('/', (req, res) => {
    db.query('SELECT * FROM beds', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// ADD a new bed
router.post('/', (req, res) => {
    const { bed_number, ward, status, patient_id } = req.body;
    db.query('INSERT INTO beds (bed_number, ward, status, patient_id) VALUES (?, ?, ?, ?)', 
    [bed_number, ward, status, patient_id], 
    (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Bed added successfully', id: results.insertId });
    });
});

// Other CRUD operations can be added similarly

module.exports = router;
