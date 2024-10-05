const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.post('/register',(req,res)=> {
    const {username, password} = req.body;
    res.json({requestData:{username, password}});
});

app.listen(4000);


//mongodb+srv://InQuill:k5FognQzjE4fiPlL@cluster0.ss2f0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0