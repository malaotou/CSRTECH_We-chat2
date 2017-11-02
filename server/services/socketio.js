exports.socketService=function(io){
    var jwt = require('jsonwebtoken');
        users = [];

        
io.sockets.on('connection', function(socket) {          
        //new user login
        socket.on('login', function(nickname) {
            console.log('login'+nickname);
            if (users.indexOf(nickname) > -1) {
                socket.emit('nickExisted');
            } else {
                //socket.userIndex = users.length;
                socket.nickname = nickname;
                users.push(nickname);
                socket.emit('loginSuccess');
                io.sockets.emit('system', nickname, users.length, 'login');
            };
        });
        //user leaves
        socket.on('disconnect', function() {
            if (socket.nickname != null) {
                //users.splice(socket.userIndex, 1);
                users.splice(users.indexOf(socket.nickname), 1);
                socket.broadcast.emit('receivemsg', {text:"user disconected"});
            }
        });
        //new message get
        socket.on('postMsg', function(msg, color) {
            socket.broadcast.emit('newMsg', socket.nickname, msg, color);
        });
        //new image get
        socket.on('img', function(imgData, color) {
            socket.broadcast.emit('newImg', socket.nickname, imgData, color);
        });

        // 客户端发送消息// 可根据状态发送给不同的客户端。
       /* socket.on('sendmsg', (message,token) => {
            //console.log('message received');
            //console.log(socket.id);
            console.log(message);
            console.log(token);
            var decodetoken=jwt.decode(token);
            console.log(decodetoken);
            io.emit('receivemsg', {type:'new-message', text: message});    
            io.emit('receivemsg', {type:'new-message', text: '这是系统自动回复'}); 
            // 除自己外发送
            socket.broadcast.to('abc123').emit('receivemsg',{type:'new-message', text: '创建room成功'}); 
            // 发送到所有room 人
            io.sockets.in('abc123').emit('receivemsg',{type:'new-message', text: '加入room成功'})  
        });*/
        // 客户端发送消息// 可根据状态发送给不同的客户端。
        socket.on('sendmsg', (message,room,token) => {
            //console.log('message received');
            //console.log(socket.id);
            console.log(message);
            console.log(token);
            var decodetoken=jwt.decode(token);
            console.log(decodetoken);
            io.emit('receivemsg', {type:'new-message', text: message});    
            //io.emit('receivemsg', {type:'new-message', text: '这是系统自动回复'}); 
            // 除自己外发送
            //socket.broadcast.to(room).emit('receivemsg',{type:'new-message', text: message}); 
            // 发送到所有room 人
            io.sockets.in(room).emit('receivemsg',{type:'new-message', text: message})  
        });
        
        // 可暂时不用
        socket.on('ceateroom',function(name,user){
            // 随机测试使用    
            socket.room = "abc123";
            // socket.join("abc123",function(name){
            //     socket.to("abc123").emit('receivemsg',{type:'new-message', text: '创建room成功'});
            //     //io.emit('receivemsg', {type:'new-message', text: '创建room成功?'}); 
            // });

            // 可以发送给相关所有组的用户，不需要是该组的成员。
            io.sockets.in('abc123').emit('receivemsg',{type:'new-message', text: '加入room成功'})  
           
        })


        // 进入聊天室，客户通过发起消息加入，客服通过匹配逻辑，后台自动分配先关的聊天组。
        socket.on('joinroom',function(room,user){
            socket.room = 'Lobby';
            socket.join('Lobby');
            socket.emit('updatechat', 'SERVER', 'you have connected to Lobby');
            socket.room = "abc123";
            socket.join("abc123",function(roomname){
                // 发送给所有非自己
                //socket.to("abc123").emit('receivemsg',{type:'new-message', text: '加入room成功'})
            });
        })
    });
}
//io.socket.on('connect_failed',function(){});