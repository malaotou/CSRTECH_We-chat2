'use strict';

var express = require('express');
var app = express();
var routes = require('./routes');
let http = require('http').Server(app);
var config = require('./config').api;

// var db = require('./dal/orm')
// db.Person.find({
//   where: {
//     username: 'laoma'
//   }
// }).then(function (p) {
//   //console.log(p.dataValues);
// });

// var person = db.Person.build({
//   username: "laotou",
//   user_id: 2,
//   email: "mamou@ma.com",
//   creater: 2,
//   createdAt: "2017-10-27",
//   updatedAt: "2017-10-27"
// });
// person.save()
//   .then(function (o) {
//     console.log('保存成功！')
//   })
//   .catch(function(err){
//     console.log(err);
//   });

//  db.Person.findAll({})
//  .then(users=>{
//    console.log(users)
//  })
//  .catch(function(err){
//    console.log(err);
//  })

app.get('/  ', function (req, res) {
  res.send('123')
})
let io = require('socket.io')(http, {
  serveClient: false
});
var socketio = require('./services/socketio');

socketio.socketService(io);
routes(app);
var server = http.listen(config.port, config.host, function () {
  var host = config.host
  var port = config.port
  console.log("Example app listening at http://%s:%s", host, port)

})
