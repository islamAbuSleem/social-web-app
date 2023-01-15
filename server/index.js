const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors);
app.use(morgan('tiny'));





const PORT = process.env.PORT || 3000
app.listen(PORT)