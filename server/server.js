const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

// ^ CONNECT TO MONGO SERVER
mongoose.connect(process.env.URI)
.then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.error(`Error connecting to ${process.env.DB_NAME}: ${err}`)
})

const app = express();

// ^ SET UP MIDDLEWARE
app.use(cors());
// in the bootcamp there are other steps - RESEARCH THIS
// app.use(express.json())
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));

// ^ START SERVER - difference with connect vs. start server?
// run with the command npm run dev as we specified in the package.json
app.listen(3000, () => {
    console.log('Server is running on Port 3000')
});

// if you type localhost:3000/api this will show on the screen one you have the server starting
app.get('/api', (req, res) => {
    res.json({'users': ['user1', 'user2']})
});

// register a user
app.post("/register", async (req, res) => {
    try {

    } catch(err) {

    }
})