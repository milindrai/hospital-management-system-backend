const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all inventory items
router.get('/', (req, res) => {
    db.query('SELECT * FROM inventory', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// ADD a new inventory item
router.post('/', (req, res) => {
    const { item_name, quantity, expiration_date } = req.body;
    db.query('INSERT INTO inventory (item_name, quantity, expiration_date) VALUES (?, ?, ?)', 
    [item_name, quantity, expiration_date], 
    (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ message: 'Inventory item added successfully', id: results.insertId });
    });
});

// Other CRUD operations can be added similarly

module.exports = router;
