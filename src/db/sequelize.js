const dotenv = require('dotenv');
dotenv.config()

module.exports = {
  "development": {
    "storage": process.env.DB_STORAGE,
    "dialect": "sqlite"
  },
  "test": {
    "storage": process.env.DB_STORAGE,
    "dialect": "sqlite"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}
