const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./DB/dbConfig');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const { verifyUser } = require('./middlewares/auth')

// import routes
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');


// middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    next()
})
app.use(cors({
    origin: 'http://127.0.0.1:5173'
}));

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, './public/uploads')));


// routes
app.use('/users', usersRoute);
app.use('/auth', authRoute);
app.use('/posts', verifyUser, postsRoute);


// testing db connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((e) => {
    console.error('Unable to connect to the database:', e);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`app is running on port ${PORT}`))