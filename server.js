require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// Parse the incoming request bodies
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/tasks', require('./routes/api/tasks'));

//  Check if the server is running
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Todo App!" });
});

const port = 3434
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})