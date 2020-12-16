const express = require('express');
const path = require('path');
const db = require('./database').getInstance();

const app = express();

db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

const { usersRouter } = require('./routes');

app.use('/users', usersRouter);

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
