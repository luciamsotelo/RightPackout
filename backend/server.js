require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(cors({ origin: 'https://www.therightpackout.com' }));
app.use(express.json());

// API routes
app.use('/api', reviewRoutes);

// Serve frontend build
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
