const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all appointments
router.get('/', (req, res) => {
    db.query('SELECT * FROM appointments', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// ADD a new appointment
router.post('/', (req, res) => {
    const { patient_id, doctor_id, appointment_date, status } = req.body;
    db.query('INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, ?)', 
    [patient_id, doctor_id, appointment_date, status], 
    (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Appointment scheduled successfully', id: results.insertId });
    });
});

// Other CRUD operations can be added similarly

module.exports = router;
