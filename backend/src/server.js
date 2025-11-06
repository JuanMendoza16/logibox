require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('../../common/config'); // Import config as CommonJS
const sequelize = require('./config/database'); // Import Sequelize instance

const app = express();
const PORT = process.env.PORT || 5000;

// Example usage of config (for demonstration, remove later if not needed)
console.log('Supabase URL (Backend):', config.SUPABASE_URL);
console.log('Supabase Anon Key (Backend):', config.SUPABASE_ANON_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('LogiBox Backend API is running!');
});

// Database synchronization and server start
sequelize.sync({ force: false }) // `force: true` will drop tables if they exist
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('Database synchronized.');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
