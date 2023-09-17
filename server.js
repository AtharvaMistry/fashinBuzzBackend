require('dotenv').config();
require('./config/connection');
const express = require('express');
const morgan = require('morgan')
const cors = require('cors'); 
const index = require('./route/index_route');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
    origin: "*"
})); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use('/', index);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});