const logger = require("./LoggerConfig.js");
//access log에 대한 필요 lib
const morgan = require('morgan');

var path = require('path')
var rfs = require('rotating-file-stream') 

//accesslog만 따로 지정해서 보관할 경로 설정
var accessLogStream = rfs.createStream('access.log', {
    interval: '20s', // rotate daily
    path: path.join('D:/logs/chatctl/test', 'access')
  })

const express = require('express');
const app = express();

//access log 찍는 부분
app.use(morgan('combined', { stream: accessLogStream }))

const port = 3000;

app.get('/', (req, res) => {
    logger.info("Hello World!")
    logger.error("Hello World!")
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})