require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts')
const bp = require('body-parser');

const app = express();

app.use(cors()); //cors policy simplifier
app.use(morgan('dev')); //server logger
app.use(cookieParser());
app.use(expressLayouts);

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); //add public dir to app path
app.use(express.static(path.join(__dirname, 'app')))


app.use('/api', require('./routes/api.route')); //api
app.use('/', require('./routes/store.route')); //store 

app.set('view engine', 'ejs'); //template enginde
app.set('subdomain offset', 1); //depth of subdomains reading

app.listen(3000, ()=>console.log("PORT 3000"));