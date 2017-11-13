import { Component, OnInit,Input,OnChanges,Output ,EventEmitter,ElementRef,ViewChild,Renderer2} from '@angular/core';
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
  @Output() lastMessageEmitter=new EventEmitter<Message>()
  @Output() messageroom=new EventEmitter<string>()
  currentmsg:any;
  currentRoom:any;
  msgList=[];
  demomessage:Chatmessages;
  currentuser;
  constructor(public socketService:SocketIoDemoService, public el: ElementRef) {
    // Get current user
    this.currentuser=localStorage.getItem('uname');
  }

  ngOnInit() {
    this.currentRoom=this.chatRoom;
    this.socketService.getMessage().subscribe(message=>{
      console.log(message);
      this.msgList.push(message);
      setTimeout(() => {
        this.scrollToBottom();
      });
      this.messageroom.emit(this.currentRoom);       
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
      // new Message(
      //   1,2,Date.now().toString(),"测试消息"  
      // )
    )
    this.socket.emit('login',val);
    
  }
  // sendMsg(val:string,user:string){
  //    //Send Message to the server.
  //   //this.socket.emit("message",val,user);y
  //   this.socketService.sendMessage(val,user);
    
  // }
  // sendMessage(val:string){
  //   console.log("Current Chat Room "+ this.chatRoom);
  //   console.log('client click '+val)
  //   this.socketService.sendMessage(val,localStorage.getItem('token'));
    
  // }
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
    var data:any=msg.value;
    console.log(data)
    if(data!="" && room!=null){
      console.log('currentRoom'+room);
      console.log('currentMsg'+msg.value);
      this.socketService.joinRoom(room,localStorage.getItem('uname'));
      var message=new Message(msg.value,null,room,localStorage.getItem('uname'))
      this.socketService.sendDemoMessage(message,room);
      msg.value=null;

      //this.messageroom.emit('myroom')
    }
   
  }
  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
