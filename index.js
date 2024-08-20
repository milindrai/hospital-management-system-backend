const express = require('express');
const patientRoutes = require('./routes/patientRoutes');
const bedRoutes = require('./routes/bedRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

app.use(express.json());

// Route Handling
app.use('/api/patients', patientRoutes);
app.use('/api/beds', bedRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
