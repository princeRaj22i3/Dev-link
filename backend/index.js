const express = require ('express');
const cors = require('cors');
const app = express();
const port = 3001;

const router = require('./routes/signin')

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/NEXT')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use('/',router);


app.listen(port,()=>{
    console.log(`\nhttp://localhost:${port}`)
})