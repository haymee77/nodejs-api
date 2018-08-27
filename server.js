const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(3000, () => {
    console.log('start NodeJS Server at 3000 port');
});