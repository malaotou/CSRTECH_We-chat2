import { Component, OnInit,Input,OnChanges,Output ,EventEmitter} from '@angular/core';
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
  @Input() chatRoom:any;
  @Output() lastMessageEmitter=new EventEmitter()
  currentmsg:any;
  currentRoom:any;
  msgList=[];
  demomessage:Chatmessages;
  currentMsg:string='123345';
  constructor(public socketService:SocketIoDemoService) {
    this.lastMessageEmitter.emit('message');
  }

  ngOnInit() {
    console.log("Current Chat Room "+ this.chatRoom);
    this.currentRoom=this.chatRoom;
    this.socketService.getMessage().subscribe(message=>{
      console.log(message);
      this.msgList.push(message);
      this.lastMessageEmitter.emit(message);
    })
  }
  ngOnChange(){
    this.currentRoom=this.chatRoom;
    console.log("Current Chat Room "+ this.currentRoom);
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
    this.currentMsg=null;
  }
  sendMessage(val:string){
    console.log("Current Chat Room "+ this.chatRoom);
    console.log('client click '+val)
    this.socketService.sendMessage(val,localStorage.getItem('token'));
    this.currentMsg=null;
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
  sendDemoMsg(msg:HTMLInputElement,room){
    console.log('currentRoom'+room);
    console.log('currentMsg'+msg);
    this.socketService.joinRoom(room,null);
    this.socketService.sendDemoMessage(msg.value,null);
    msg.value=null;
  }
}
