import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
//import {to} from 'socket.io-client'
//@Injectable()
export class SocketIoDemoService {
  private URL = 'http://192.168.10.136:3000';  
  private socket;
  
  constructor(){
    this.socket = io(this.URL);
  }
  sendMessage(message,token){
    this.socket.emit('sendmsg', message,token);    
  }
  
  getMessage(){
    var observable=new Observable(observer=>{     
      this.socket.on('receivemsg', (data) => {
        console.log(data);
        console.log("======================");
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }
  ceateRoom(name:string,user:string){  
      this.socket.emit('ceateroom',name,user);
  }
  joinRoom(name:string,user:string){
    //this.socket = io(this.URL);
    this.socket.room=name;
    this.socket.emit('joinroom',name,user);
    //io.to(name).emit('ceateroom',{text:"fdsa"})
  }
  
}
