const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const employeeRoutes = require('./routes/employee');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/employee', employeeRoutes);

mongoose.
    connect(process.env.MONGO_DB_URL,
        {
            useNewUrlParser: true
        }, err => {
            if (!err) {
                app.listen(3000, err => {
                    if (err)
                        console.log(err);
                    else
                        console.log("Server started");
                });
            }
            else
                console.log(err);
        });