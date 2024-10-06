const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');


mongoose.connect('mongodb+srv://khantminthaw64:qZm7gRkkRoVWknk2@cluster0.xyhqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.use(cors());
app.use(express.json());
app.post('/register', async (req, res) => {
    const{username, password} = req.body;
    const userDoc = await User.create({username, password});
  res.json(userDoc);
});
app.listen(4000);


