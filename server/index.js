const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./DB/dbConfig')


app.use(cors);
app.use(morgan('tiny'));

// testing db connection
    sequelize.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
    }).catch((e)=>{
        console.error('Unable to connect to the database:', e);
    })
    






const PORT = process.env.PORT || 3000
app.listen(PORT)