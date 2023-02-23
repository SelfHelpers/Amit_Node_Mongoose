const express = require('express');
const router = express.Router();

const User = require('../models/users.model');

router.post('/adduser', async (req, res) => {
    await User.create({
        userName: 'jane241',
        password: '@#$%^&GG'
    }).then((data) => {
        res.status(201).json({
            message: 'User added',
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            message: 'Error adding user',
            data: err.message
        })
    });
});


module.exports = router;