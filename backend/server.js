require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

// CORS setup for both local dev and deployed frontend
app.use(cors({
  origin: ['http://localhost:3000', 'https://www.therightpackout.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// API routes
app.use('/api', reviewRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route to serve index.html (for React Router support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    console.log(`Server running on http://localhost:${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});

