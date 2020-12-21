const express = require('express');
const path = require('path');
const db = require('./database').getInstance();
require('dotenv').config();

const app = express();

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

const { usersRouter, carsRouter, authRouter } = require('./routes');

// AUTH
app.use('/auth', authRouter);

// USERS
app.use('/users', usersRouter);

// CARS
app.use('/cars', carsRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.code)
        .json({
            message: err.message,
            ok: false
        });
});

app.listen(5000, () => {
    // eslint-disable-next-line no-console
    console.log('App listen 5000');
});
