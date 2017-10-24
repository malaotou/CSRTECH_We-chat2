import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Chatmessages } from '../../../modules/chatmessages'
import { Message } from '../../../modules/message';
import * as io from 'socket.io-client'

import  { SocketIoDemoService } from '../../../services/socket-io-demo.service';
import  'rxjs'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers:[SocketIoDemoService]
})
export class ChatComponent implements OnInit {
  socket = null;
  // @Input() chatId="pp";
  currentmsg:any;
  msgList=[];
  demomessage:Chatmessages;
  constructor(public socketService:SocketIoDemoService) {
    // console.log(this.chatId);
    // let currentmsg='';
    
    // var msg=new Message(123,123,'2017-01-01','这是聊天的内容，需要如何展示呢！');
    // msgList.push(msg);
    // msgList.push(msg);
    // msgList.push(msg);
    // this.demomessage=new Chatmessages(124,msgList);
   }

  ngOnInit() {
    // let chatId="init";
    // let currentmsg='';
    // console.log(this.chatId);
    // this.socket = io('http://localhost:3000');
    // this.socket.on('connect', function() {
    //   console.log("connect from angular2");
    // });
    this.socketService.getMessage().subscribe(message=>{
      console.log(message);
      this.msgList.push(message);
    })
  }
  emitFunction(val:String){
    //console.log(val);
    console.log(this.demomessage);
    this.demomessage.messages.push(
      new Message(
        1,2,Date.now().toString(),"测试消息"  
      )
    )
    this.socket.emit('login',val);
    
  }
  sendMsg(val:string,user:string){
     //Send Message to the server.
    //this.socket.emit("message",val,user);y
    this.socketService.sendMessage(val,user);
  }
  sendMessage(val:string){
    console.log('client click '+val)
    this.socketService.sendMessage(val,localStorage.getItem('token'));
  }
  createRoom(roomname:string,user:string){
    //this.socketService.joinRoom(roomname);
    this.socketService.ceateRoom(roomname,user);
  }
  // getApiMessages(){
  //   this.socketService.getMessage().subscribe(message=>{
  //   this.msgList.push(message);
  //   })
  // }
  joinRoom(room:string,user:string){
    console.log(room);
    console.log(user);
    this.socketService.joinRoom(room,user);
  }
}
