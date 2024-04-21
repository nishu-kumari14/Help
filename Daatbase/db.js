const mongoose = require('mongoose');
require("dotenv").config();
const conn = async () =>
{
    try{
    mongoose.connect(process.env.DATABASE_URL,{
    })
    .then(() =>
    {
        console.log("Databse Connected");
    })
}
catch (err)
{
    console.log("Error in Connection of Db ");
}
}
module.exports = conn;