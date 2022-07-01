const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/key').mongoURI;


const users = require('./routes/user');

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/user', users);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Server running on port ${port}`));