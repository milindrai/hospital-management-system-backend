const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all patients
router.get('/', (req, res) => {
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// ADD a new patient
router.post('/', (req, res) => {
    const { name, age, gender, contact_info, admission_date, status } = req.body;
    db.query('INSERT INTO patients (name, age, gender, contact_info, admission_date, status) VALUES (?, ?, ?, ?, ?, ?)', 
    [name, age, gender, contact_info, admission_date, status], 
    (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Patient added successfully', id: results.insertId });
    });
});

// Other CRUD operations can be added similarly

module.exports = router;
