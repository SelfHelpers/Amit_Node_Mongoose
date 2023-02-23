const express = require('express');
const sum = require('./services/sum.js');
const mongoose = require('mongoose');

// const initializeServer = require('./DBConnect/mongoConnect')

const employee = require('./models/employee.js');

const person = require('./models/data');

const app = express();

const PORT = 3000;

// My Public IP Address 103.109.144.44

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

app.use(express.json());

app.use('/tasks', require('./routes/task'));
app.use('/users', require('./routes/user'));


app.get('/', (req, res) => {
    console.log('Hello world');
    res.send('Hello world');
    console.log(sum(2, 5));
    console.log(person.firstName);

    var emp = new employee('John', 'Doe');
    console.log(emp.fullName());
})


