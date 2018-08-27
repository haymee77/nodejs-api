const compression = require('compression');
const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./route');

app.use(compression());
app.use(cors());

app.use((req, res, next) => {
    console.log('middleware');
    // throw new Error('err test');
    next();
});

app.use('/', router);

app.use((req, res, next) => {
    res.status(404).send('일치하는 주소가 없습니다.');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('서버 에러!');
})

app.listen(3000, () => {
    console.log('start NodeJS Server at 3000 port');
});