const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./DB/dbConfig')
const usersRoute = require('./routes/users')
const authRoute = require('./routes/auth')

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// testing db connection
sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((e)=>{
    console.error('Unable to connect to the database:', e);
})

// routes
app.use('/users', usersRoute)
app.use('/auth', authRoute)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.log(`app is running on port ${PORT}`))