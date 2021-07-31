const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
var bodyParser = require('body-parser')

// app express
const app = express();
console.log('đang khởi động...');
const connect_mongo = 'mongodb://user:server123@levelhigh.site:27017/levelhigh';
mongoose.connect(connect_mongo, { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    app.listen(80);
    console.log('Khởi động hoàn tất.');
});

app.use(bodyParser.urlencoded({ extended: false })) // sài được post thì phải thêm phần này

app.use(session({ // khai báo session cho express 
    secret: '832yru9e8fhshjfiuwe2398',
    resave: false,
    saveUninitialized: true,
  //  cookie: { secure: true }
  }))

app.set('view engine', 'ejs');
app.use(express.static('public')); // set folder chứa file tĩnh

app.use("/", require('./routes/web')); // gọi routes khai báo cho expressjs