const express = require("express");
const cors = require("cors"); // ✅ Only declare once
const { sequelize } = require("./models");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// ✅ Use CORS middleware
const allowedOrigins = [
  "http://localhost:3000",
  "https://www.therightpackout.com",
  "https://name-therightpackout-new.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);

app.use(express.json());

// Routes
app.use("/api", reviewRoutes);

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});
