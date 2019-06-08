require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const MOVIES = require('./movies-data-small.json');
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(function validateBearerToken(req, res, next) {
    const authToken = req.get('Authorization');
    const apiToken = process.env.API_TOKEN;
    // move to the next middleware
    if (!authToken || authToken.split(' ')[1] !== apiToken) {
        return res.status(401).json({ error: 'Unauthorized request' })
    }
    next()
});

function handleGetTypes(req, res) {

}

app.get('/movie', handleGetTypes)

app.listen(8000, () => {
    console.log('The server is listening at port :8000');
})