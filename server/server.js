'use strict';

/*let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
var socketio=require('./services/socketio');
var httpapi=require('./services/httpservice')
var CheckToken=require('./routes/tokencheck')
var routes=require('./routes');
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.header("Access-Control-Allow-Headers", "Content-Type, authorization")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  //res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  app.next;
})

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  //res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  //res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  console.log('header')
  next();
});
//var router = express.Router();



//app.use("/api", CheckToken);
//routes(app);
//socketio.socketService(io);
//备用
//app.use('/api',httpapi);
http.listen(3000, () => {
  console.log('started on port 3000');
});
*/
var express = require('express');
var app = express();
var routes=require('./routes');
let http = require('http').Server(app);
// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
//   res.header("Access-Control-Allow-Headers", "Content-Type, authorization")
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   //res.header("X-Powered-By", ' 3.2.1');
//   res.header("Content-Type", "application/json;charset=utf-8");
//   app.next;
// })
app.get('/  ', function (req, res) {
   res.send('123')
})
let io = require('socket.io')(http,{ serveClient: false });
var socketio=require('./services/socketio');

socketio.socketService(io);
routes(app);
var server = http.listen(3000,'0.0.0.0', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})

