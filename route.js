const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/user/:name', (req, res) => {
    res.json({ name: req.params.name });
});

module.exports = router;