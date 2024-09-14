const express = require('express');
const sequelize = require('./config/db'); // Updated db.js reference
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running...');
});

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log('Database connected!');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to the database:', err);
    });
