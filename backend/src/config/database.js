const { Sequelize } = require('sequelize');
const config = require('../../../common/config'); // Adjust path as necessary

const sequelize = new Sequelize(
  process.env.DB_NAME || 'postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || config.SUPABASE_URL.split('//')[1].split(':')[0], // Extract host from Supabase URL
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // For self-signed certificates, adjust as needed
      },
    },
    logging: false, // Set to true to see SQL queries
  }
);

module.exports = sequelize;
