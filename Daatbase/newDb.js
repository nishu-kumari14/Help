const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const db = async () =>
{
    try
    {
        mongoose.connect(process.env.DATAVASE_URL,{
        })
        .then(() =>
    {
        console.log("Db connection succefully");
    })
    }
    catch (err) 
    {
        console.log("Error in connection");
    }
}