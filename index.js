require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(require('./router/index2'));
const dataBase = require('./Daatbase/db');
dataBase()
.then(() =>
{
    app.listen(PORT,() =>
    {
        console.log(`Server started successfully at ${PORT}`);
    });
})
.catch((error) =>
{
    console.log("Db connection Error: ",error);
})



