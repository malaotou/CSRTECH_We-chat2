import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class Demo4Service {

  public chatrooms=[]
   
  constructor() { }

  addroom(roomid:string){
    if(this.chatrooms.find(item=> item.id!==roomid))
    {
      
    }
    this.chatrooms.push(roomid);
    console.log(this.chatrooms);
  }
  getRooms() {
    return Observable.from(this.chatrooms);
  }

}
