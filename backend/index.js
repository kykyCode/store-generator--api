const express = require('express');
const cors = require('cors')
const bp = require('body-parser')
const app = express();
const db = require('./database')

app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.get('/api', (req, res)=>{
    res.send('Hello Worldssssssss');
});

app.get('/api/test', (req, res)=>{
    res.send('DZIALLALADASDASD RYRRYYRYR');
});

app.post('/api/post', (req, res)=>{
    const {name, info, email} = req.body;
    db.promise().query(`INSERT INTO USERS VALUES('${name}','${email}')`);
    res.status(201).send({msg: 'Created User'});
});



app.listen(3000, ()=>console.log("PORT: 3000"));