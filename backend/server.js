const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const morgan = require('morgan');
const bp = require('body-parser');
const app = express();
const db = require('./database');

app.use(cors());
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

app.post('/api/post', (req, res)=>{
    const {name, info, email} = req.body;
    db.promise().query(`INSERT INTO USERS VALUES('${name}','${email}')`);
    res.status(201).send({msg: 'Created User'});
});



app.listen(3000, ()=>console.log("PORT 3000"));