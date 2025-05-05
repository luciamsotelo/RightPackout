const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', reviewRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
