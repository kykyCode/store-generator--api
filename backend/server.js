require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const bp = require('body-parser');
const app = express();

app.use(cors());
app.use(cookieParser())
app.use(morgan('dev'));  
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.send({
        message: 'Welcome ty my API. Useful uris are located at => /api',
        status: 200
    });
});

app.use('/api', require('./routes/api.route'));

app.listen(3000, ()=>console.log("PORT 3000"));