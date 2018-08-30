const compression = require('compression');
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./route');

app.use(compression());
app.use(cors());
app.use(methodOverride());  // PUT, DELETE를 지원 안하는 클라이언트를 위해
app.use(bodyParser.json()); // body 데이터를 json으로 받음
app.use(bodyParser.urlencoded({ extended: true })); // 쿼리스트링 파싱

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