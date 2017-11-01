import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import {url} from '../config/config'
//import {to} from 'socket.io-client'
//@Injectable()
export class SocketIoDemoService {
  private URL = url;  
  private socket;
  
  constructor(){
    this.socket = io(this.URL);
  }
  sendMessage(message,token){
    this.socket.emit('sendmsg', message,token);    
  }
  sendDemoMessage(message,room){
    this.socket.emit('sendmsg', message,room,null);    
  }
  
  getMessage(){
    var observable=new Observable(observer=>{     
      this.socket.on('receivemsg', (data) => {
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
    this.socket.room=name;
    this.socket.emit('joinroom',name,user);
  }
  
}
