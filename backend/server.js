const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.use('/api', reviewRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
