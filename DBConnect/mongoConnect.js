const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = 3000;

module.exports = async () => {
    mongoose.connect("mongodb+srv://AmitRaj:AmitRaj123@cluster0.yog8h5r.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error('Error connecting to database', err);
        } else {
            console.log('Connected to database');
            app.listen(3000, () => {
                console.log('Server listening on port 3000');
            });
        }
    });
}

