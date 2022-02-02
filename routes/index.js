const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/index', (req, res) => {
    res.render('index');
});

router.get('/form', (req, res) => {
    res.render('form');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.post('/form', (req, res) => {
    const { fname, lname } = req.body;

    const newUser = new User ({
        fname,
        lname
    });

    newUser.save();
    res.render('dashboard', {data: req.body});
    console.log('Record successfully registered');
});

module.exports = router;