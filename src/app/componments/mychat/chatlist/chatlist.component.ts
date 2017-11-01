import { Component, OnInit } from '@angular/core';
import { Chatgroup } from '../../../modules/chatgroup'
import { Companys } from '../../../demoData/companys';
@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  chatlist:Array<Chatgroup>=[];
  currntitem:string;
  chatRooms=Companys;
  constructor() {
  }
  ngOnInit() {
    console.log('ini ')
  }
  checkthis(val:any){

    this.currntitem=val;
    console.log('current '+val);
  }
  bindRoom(room:string){
    console.log(room);
    this.currntitem=room;
  }
}
