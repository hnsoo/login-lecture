// Express 없이 기본 서버 구동
// const http = require('http');
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
//     console.log(req.url);
//     if (req.url == '/') {
//         res.end('여기는 루트 입니다.');
//     } else if (req.url == '/login') {
//         res.end('여기는 로그인 입니다.');
//     }
// });

// app.listen(3001, ()=>{
//     console.log('http로 가동된 서버입니다.');
// });
"use strict";

// 모듈
const express = require('express');
const app = express();
const path = require('path');

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set('views', path.join(__dirname, 'src','views')); 
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);  // use -> 미들웨어

module.exports = app;

